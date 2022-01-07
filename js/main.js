document.addEventListener("click", (e) => {

    switch (e.path[1].id) {

        case 'piedra':
            console.log("Usted eligió piedra.");
            localStorage.setItem("opt", e.path[1].id);
            window.location.href = "./resultado/";
            break;

        case 'papel':
            console.log("Usted eligió papel.");
            localStorage.setItem("opt", e.path[1].id);
            window.location.href = "./resultado/";
            break;

        case 'tijera':
            console.log("Usted eligió tijera.");
            localStorage.setItem("opt", e.path[1].id);
            window.location.href = "./resultado/";
            break;

        default:
            break;

    }

});

