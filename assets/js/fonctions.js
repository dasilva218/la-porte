/**
 * Fonctions de travail
 */
// fonction sur l'évenement click
function valide(e) {
    //regex sur la vérification de l'email
    const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    //regex sur la vérification du mot de passe
    const regexPasse = /^[^éèàçê][a-zA-Z0-9éèàçê]{8,}/
    //sélection de la div pour les message d'erreur
    let message = document.querySelector('.message');
    // sélection de input mot de passe
    let inputPass = document.querySelector('input[name=pass]');
    // sélection de input email
    let inputM = document.querySelector('input[name=email]');
    // sélection du formulaire
    let form = document.querySelector('form')

    //condition sur le formulaire

    if (inputM.value == '' && inputPass.value == '') {
        message.classList.add('message-visible')
        message.innerHTML = 'Remplir les champs vides'
        e.preventDefault()

    } else {
        if (regexMail.test(inputM.value) == false) {
            message.classList.add('message-visible')
            message.innerHTML = 'L\'adresse n\'est pas valide'
            e.preventDefault()

        } else if (regexPasse.test(inputPass.value) == false) {
            message.classList.add('message-visible')
            message.innerHTML = 'Le mot de passe a au moins 8 caractères'
            e.preventDefault()

        } else {
            form.style.backgroundColor = "#a7ff3342"
            // j'omets volontairement preventDefault 
            //pour permettre le rechargement de la page
        }
    }
}

// fonction sur le controle des erreurs

(function () {
    let mess = document.querySelector('.message')
    // Détection de valeur dans les champs de saisie
    document.querySelectorAll('.input100').forEach(function (input) {
        input.addEventListener('focus', function () {
            // On vérifie si l' élément html est affiché
            // contient il la classe message-visible
            if (mess.classList.contains('message-visible')) {
            // si oui l'enlever    
                mess.classList.remove('message-visible');
            }
        })
    })
})();