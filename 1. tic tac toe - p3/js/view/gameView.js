const gameView = {
    init(gameController) {
        this.gameController = gameController;
        //Select all checkbox
        this.checkboxes = document.querySelectorAll(".game-view input[type='checkbox']");
        this.restartBtn = document.querySelector('#restart-game');
        this.playerName = document.querySelectorAll(".current-player");
        this.currentView = document.getElementById("gameBoard");
        this.endBtn = document.getElementById("end-game");
        for (const box of this.checkboxes) {
            box.addEventListener('change', (event) => this.checkboxChange(event));
        }

        this.restartBtn.addEventListener('click',  () =>
            this.gameController.restartGame()
        );

        this.endBtn.addEventListener('click', () =>{
            this.gameController.endGame()
        });

        //this.render();

    },

    render() {
        this.show();
        for (const object of this.playerName) {
            object.textContent = this.gameController.getCurrentPlayer().name;
        }

        this.clearBoard();

        const allPlayers = this.gameController.getAllPLayer();

        for (const player of allPlayers) {
            for (const position of player.position) {
                const selector = `.game-view input[data-block='${position}']`;
                console.log(selector);
                const current_checkbox = document.querySelector(selector);
                current_checkbox.checked = true;
                current_checkbox.disabled = true;
                current_checkbox.parentNode.querySelector('label').textContent = player.mark;
            }
        }
    },

    clearBoard() {
        for (const box of this.checkboxes) {
            box.checked = false;
            box.disabled = false;
            box.parentNode.querySelector('label').textContent = "";
        }
    },

    checkboxChange(event) {
        const checkbox_obj = event.target;
        const current_block = parseInt(checkbox_obj.dataset.block);
        checkbox_obj.disabled = true;
        this.gameController.addPosition(current_block);
    },

    show(){
        this.currentView.style.display = "block";
    },

    hide(){
        this.currentView.style.display = "none";
    }
}

export default gameView;