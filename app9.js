let button= document.createElement("button");
button.innerHTML="Login....";
button.addEventListener("click", function(){
    if (inputEle.value !== "coolStudent123") {
        messageEle.innerHTML = "Incorrect Information Please Try Again.........";
    } else {
        const pages = [
            {
                page: "Home",
                navigate: homepage,
            },
            {
                page: "About",
                navigate: about,
            },
            {
                page: "View",
                navigate: viewing,
            }
        ]






        function navButton(pg, pr, nv) {
            let button = document.createElement("button");
            button.innerHTML = pg;
            button.addEventListener("click", function () {
                document.body.querySelector(".wrapper").innerHTML = ""
                nv();
            });
            pr.appendChild(button);
        }


        function navigation() {
            let nav = document.createElement("nav");
            let wrapper = document.createElement("div");
            wrapper.classList.add("wrapper")
            nav.style.height = "80px";
            nav.style.backgroundColor = "blue";
            for (obj of pages) {
                navButton(obj.page, nav, obj.navigate);

            }


            document.body.appendChild(nav);
            document.body.appendChild(wrapper);
        }

        function homepage() {
            let home = document.createElement("h1");
            home.innerHTML = "Home Page";
            document.body.querySelector(".wrapper").appendChild(home);
        }

        function about() {
            let about = document.createElement("h1");
            let nameEle = document.createElement("h3");
            about.innerHTML = "About Page";
            nameEle.innerHTML = "Dante Lewis";
            about.appendChild(nameEle);
            document.body.querySelector(".wrapper").appendChild(about);
        }

        function viewing() {
            let view = document.createElement("h1");
            view.innerHTML = "View Notes";
            let inputEle2 = document.createElement("input");
            inputEle2.placeholder = "Text....."
            view.appendChild(inputEle2);
            let inputEle3 = document.createElement("input");
            inputEle3.placeholder = "Importance";
            view.appendChild(inputEle3);
            document.body.querySelector(".wrapper").appendChild(view);
            document.body.querySelector(".wrapper").appendChild(inputEle2);
            document.body.querySelector(".wrapper").appendChild(inputEle3);
            let button2 = document.createElement("button");
            button2.innerHTML = "Submit Note";
            button2.addEventListener("click", function () {
                if (isNaN(inputEle3.value)) {
                    list.push("Invalid Input");
                    renderList();
                }
                else{
                    list.push(inputEle2.value + " " + inputEle3.value);
                    renderList();
                }
            })



            document.body.querySelector("div").appendChild(button2);
            //document.body.querySelector(".wrapper").appendChild(messageEle);
            document.body.querySelector(".wrapper").appendChild(listEle);
            renderList()


        }
        let list = [];
        let listEle = document.createElement("div");

        function renderList() {
            listEle.innerHTML = "";
            for (let i = 0; i < list.length; i++) {
                let ele = document.createElement("div");
                ele.innerHTML = list[i];
                listEle.appendChild(ele);
            }

        }


        navigation();
        about();
        homepage();
        navButton();
        viewing();



    }
})

let inputEle = document.createElement("input");
inputEle.placeholder="User....";

let messageEle= document.createElement("h3");


document.body.appendChild(inputEle);
document.body.appendChild(messageEle);
document.body.appendChild(button);



//let inputElePass= document.createElement("input");
//inputElePass.placeholder="Password...";
//inputElePass.setAttribute("type", "password");
// document.body.appendChild(inputElePass);