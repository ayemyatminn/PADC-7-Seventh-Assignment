
const registerView = {
    init(controller) {
        this.player1Name = document.getElementById("player1Name");
        this.player2Name = document.getElementById("playe2rName");
        this.submieButton = document.getElementById("start");
        this.controller = controller;
        this.currentView = document.getElementById("registerView");
        this.submieButton.addEventListener('click', () => {
            const player1Name = this.player1Name.value;
            const player2Name = this.player2Name.value;
            this.controller.startGame(player1Name, player2Name);
        });
        this.viewPort = document.getElementById("viewPort");
        this.itemTemplate = document.getElementById("winners").innerHTML;

        // const res = this.controller.getWinnerList();
        // this.getItemTemplate(res);
        // this.viewPort.innerHTML = "";
        // for(let template of res){
        //     this.viewPort.innerHTML += template;
        // }
        this.render();

    },

    render() {
        const res = this.controller.getWinnerList();    
        this.viewPort.innerHTML += this.getItemTemplate(res);

        this.currentView.style.display = "block";
    },


    hide() {
        this.currentView.style.display = "none";
    },


    clear() {
        this.player1Name.value = "";
        this.player2Name.value = "";
    },

    getItemTemplate(object) {
        console.log(object);
        const result = this.itemTemplate
            .replace("Aye Myat Minn", object.currentValue);
        return result;
    }
}

export default registerView;