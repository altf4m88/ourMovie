class Search extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(e){
        this._clickEvent = e;
        this.render();
    }

    get value(){
        return this.querySelector('#searchText').value;
    }

    render(){
        this.innerHTML = `
        <div class="container mt-3 ">
            <div class="jumbotron bg-primary text-center">
                <h3 class="text-center text-white">Search Here </h3>
                <div class="flex flex-column">
                    <input type="text" id="searchText" class="form-control bg-secondary">
                    <button class="btn btn-warning btn-md mt-3" id="searchButton" onclick="console.log(1)">Search</button>
                </div>
            </div>
        </div>
        `;       
    }
}

customElements.define("search-movie", Search);