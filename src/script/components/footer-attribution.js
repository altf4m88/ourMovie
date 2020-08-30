class Footer extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(e){
        this._clickEvent = e;
        this.render();
    }

    render(){
        this.innerHTML = `
        <footer>
            <p>Submission Front-End Dicoding &#169; 2020 Muhamad Fadhil Mauladhani</p>
            <p>API Provided By:</p>
            <img class="attribution"src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="">
        </footer>
        `;     
    }
}

customElements.define("footer-attribution", Footer);