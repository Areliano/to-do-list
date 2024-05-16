(() => {
    let TODOLISTArray =[];
    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".TODOLIST")
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let itemId = Strng(Date.now());
        let TODOItem = input.value;
        addItemTODOM(itemId, TODOItem);
        addItemTOArray(itemId, TODOItem);
        InputDeviceInfo.VALUE = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id", itemId)
        if (!id) return;
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    function addItemTODOM(itemId, TODOItem) {
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText = TODOItem;
        ul.appendChild(li);
    }

    function addItemTOArray(itemId, TODOItem) {
        TODOLISTArray.push({id: itemId, value: TODOItem});
        console.log(TODOLISTArray);

    }

    function removeItemFromDOM(id) {
        var li = document.querySelector('[data-id="' + id + '"]');
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        TODOLISTArray = TODOLISTArray.filter((item) => item.itemId !== id);
        console.log(TODOLISTArray);
    }
}) ();                  