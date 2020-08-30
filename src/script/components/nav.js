class Navigation extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(e){
        this._clickEvent = e;
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand">our<span class="boldtitle" >Movie<span></a>
        </nav>
        `;     
    }
}

customElements.define("nav-bar", Navigation);