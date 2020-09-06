new Vue({
    el: '#app',
    data: {
        started: false,
        playerHealth: 0,
        monsterHealth: 0,
        playerHealthStyle: {
            width: '0px',
            background: 'gray'
        },
        monsterHealthStyle: {
            width: '0px',
            background: 'gray'
        },
        turn: 'player',
        settings: {
            player: {
                attack:{
                    min: 3,
                    max: 10
                },
                specialAttack: {
                    min: 10,
                    max: 20
                },
                heal: 10
            },
            monster:{
                attack: {
                    min: 5,
                    max: 12
                },
                specialAttack: {
                    min: 5,
                    max: 12
                }
            }
        },
        actions: []
    },
    methods: {
        startGame: function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.actions = [];
            this.started = true;
        },
        calculateHealthColor: function(val){
            if(val >= 80){
                return 'green'
            }else if(val >= 40){
                return 'yellow'
            }else{
                return 'red'
            }
        },
        attack: async function(){
            this.doAttack();
            this.changeTurn();

            await sleep(1000);

            // Monster's turn
            this.doAttack();
            this.changeTurn();
        },
        specialAttack: async function(){
            this.doSpecialAttack();
            this.changeTurn();

            await sleep(1000);
            
            // Monster's turn
            this.doSpecialAttack();
            this.changeTurn();
        },
        heal: async function(){
            if(this.playerHealth + this.settings.player.heal > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += this.settings.player.heal;
            }

            this.createLog('heal', this.turn + ' - Heal');
            this.changeTurn();

            await sleep(1000);

            // Monster's turn
            this.doAttack();
            this.changeTurn();
        },
        giveUp: function(){
            this.createLog('give-up', this.turn + ' - Give Up')
            this.started = false;
        },
        doAttack: function(){
            let settings = this.settings[this.turn];
            let damage = this.calculateDamage(settings.attack.min, settings.attack.max);
            this.createLog('attack', this.turn + ' - Attack (' + damage + ')');
            this.applyDamage(damage);
        },
        doSpecialAttack: function(){
            let settings = this.settings[this.turn];
            let damage = this.calculateDamage(settings.specialAttack.min, settings.specialAttack.max);
            this.createLog('special-attack', this.turn + ' - Special Attack (' + damage + ')');
            this.applyDamage(damage);
        },
        changeTurn: function(){
            this.turn = this.turn == 'player' ? 'monster' : 'player';
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max), min);
        },
        applyDamage: function(damage){
            if(this.turn == 'player'){
                this.monsterHealth -= damage;
            }else{
                this.playerHealth -= damage;
            }
        },
        createLog: function(action, description){
            this.actions.unshift({ 
                'turn': this.turn,
                'action': action,
                'description': description
            });
        }
    },
    watch: {
        playerHealth: function(val){
            this.playerHealthStyle.width = (val < 0 ? 0 : val)  + '%';
            this.playerHealthStyle.background = this.calculateHealthColor(val);
            if(val <= 0 && this.started){
                this.playerHealth = 0;
                alert('You lost!');
                this.started = false;
            }
        },
        monsterHealth: function(val){
            this.monsterHealthStyle.width = (val < 0 ? 0 : val) + '%';
            this.monsterHealthStyle.background = this.calculateHealthColor(val);
            if(val <= 0 && this.started){
                this.monsterHealth = 0;
                alert('You won!');
                this.started = false;
            }
        }
    }


});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}