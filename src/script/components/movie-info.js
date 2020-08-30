class Information extends HTMLElement{
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
            <div id="movieInfo" class="row">
            
            </div>
        </div>
        `;     
    }
}

customElements.define("movie-info", Information);