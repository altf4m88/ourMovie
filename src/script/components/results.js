class Results extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(e){
        this._clickEvent = e;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="container">
            <div id="movies" class="row">
            
            </div>
        </div>
        `;     
    }
}

customElements.define("search-results", Results)