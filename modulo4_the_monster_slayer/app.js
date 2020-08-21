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
        actions: []
    },
    methods: {
        startGame: function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
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
        attack: function(){
            let damage = Math.floor(Math.random() * 10);
            this.actions.push(this.turn + ' - Attack (' + damage + ')');
            this.applyDamage(damage)
            this.changeTurn();
        },
        specialAttack: function(){
            let damage = Math.floor(Math.random() * 30);
            this.actions.push(this.turn + ' - Special Attack(' + damage + ')');
            this.applyDamage(damage)
            this.changeTurn();
        },
        heal: function(){
            this.actions.push(this.turn + ' - Heal')
            this.changeTurn();
        },
        giveUp: function(){
            this.actions.push(this.turn + ' - Give Up')
            this.changeTurn();
        },
        changeTurn: function(){
            this.turn = this.turn == 'player' ? 'monster' : 'player';
        },
        applyDamage: function(damage){
            if(this.turn == 'player'){
                this.monsterHealth -= damage; 
            }else{
                this.playerHealth -= damage;
            }
        }
    },
    watch: {
        playerHealth: function(val){
            this.playerHealthStyle.width = val + '%';
            this.playerHealthStyle.background = this.calculateHealthColor(val);
        },
        monsterHealth: function(val){
            this.monsterHealthStyle.width = val + '%';
            this.monsterHealthStyle.background = this.calculateHealthColor(val);
        }
    }


});