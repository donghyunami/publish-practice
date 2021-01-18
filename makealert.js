// (function(){
{
    let count = 0; // private
    let makealert = function (title, text) {
        let style = document.createElement('style');
        style.textContent = `
        .open-modal {
            width: 600px;
            height: 200px;
            position: fixed;
            top: 50%;
            left: 50%;
            margin: 0 auto;
            text-align: center;
            border-radius: 10px;
            background: #e6e5e5;
            transform: translate(-50%, -50%);
            z-index: 9999;
        }
        .open-modal > header {
            padding: 5px;
        }
        .open-modal > header > h1 {
            font-family: Arial, Helvetica, sans-serif;
        }
        .open-modal > header > span {
            display: inline-block;
            font-size: 20px;
            background-repeat: no-repeat;
            background-size: 0;
            background-position: 0 100%;
        }
        .open-modal > header > span:hover {
            background-size: 100%;
            transition: all  0.9s  ease-in-out ;
            background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, #f0a3a3 30%);
        }
        .open-modal > .close {
            width: 100%;
            height: 30px;
            position: absolute;
            left: 50%;
            bottom: 0;
            background: #a79b9b;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28px;
            color: rgb(219, 218, 218);
            border-radius: 0px 0px 10px 10px;
        }
        
        .open-modal > .close:hover {
            background: #a09595;
            color: #fff;
        }
        
        .open-modal > .cursor {
            cursor: pointer;
        }    
        `;

        if (count === 0) {
            document.head.appendChild(style);
        }
        console.log(count);
        count++;
        let html = `
                <header>
                    <h1 class="cursor">${title}</h1>
                    <span class="cursor">${text}</span>
                </header>
                <div class="cursor close">close</div>
            `;
        let container = document.createElement('div');
        container.setAttribute('class', 'open-modal');
        container.innerHTML = html;
        document.body.appendChild(container);
        let modal = container; //document.querySelector('.open-modal');
        let close = modal.querySelector('.close');
        close.addEventListener('click', (e) => {
            modal.parentElement.removeChild(modal);
            // style.parentElement.removeChild(style);
        });
    }

    window.makealert = makealert; // public
}
