// Exécuter ce script lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner les éléments nécessaires du DOM
    const taskInput = document.getElementById('taskinput'); // Champ d'entrée pour les tâches
    const taskList = document.getElementById('taskList'); // Liste où les tâches seront ajoutées
    const addButton = document.querySelector('button'); // Bouton pour ajouter une nouvelle tâche

    // Fonction pour ajouter une nouvelle tâche
    function addTask() {
        // Récupérer et nettoyer le texte de la tâche
        const taskText = taskInput.value.trim();
        
        // Si le champ de texte est vide, sortir de la fonction
        if (taskText === '') {
            return;
        }

        // Créer un nouvel élément de liste pour la tâche
        const li = document.createElement('li');
        li.textContent = taskText;

        // Créer le bouton d'édition pour la tâche
        const editButton = document.createElement('button');
        editButton.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
        // Ajouter un gestionnaire d'événements pour l'édition de la tâche
        editButton.addEventListener('click', () => editTask(li));

        // Créer le bouton de suppression pour la tâche
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
        // Ajouter un gestionnaire d'événements pour la suppression de la tâche
        deleteButton.addEventListener('click', () => deleteTask(li));

        // Ajouter les boutons d'édition et de suppression à l'élément de liste
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        // Ajouter l'élément de liste à la liste des tâches
        taskList.appendChild(li);
        
        // Réinitialiser le champ de texte de la tâche
        taskInput.value = '';
    }

    // Fonction pour éditer une tâche
    function editTask(task) {
        // Récupérer le texte actuel de la tâche
        const taskTextElement = task.firstChild;
        const taskText = taskTextElement.textContent;

        // Demander un nouveau texte pour la tâche
        const newTaskText = prompt('Modifier la tâche:', taskText);
        
        // Si l'utilisateur annule ou entre un texte vide, sortir de la fonction
        if (newTaskText === null || newTaskText.trim() === '') {
            return;
        }

        // Mettre à jour le texte de la tâche avec le nouveau texte
        taskTextElement.textContent = newTaskText;
    }

    // Fonction pour supprimer une tâche
    function deleteTask(task) {
        // Supprimer l'élément de liste de la liste des tâches
        task.remove();
    }

    // Ajouter un gestionnaire d'événements au bouton d'ajout de tâche
    addButton.addEventListener('click', addTask);
});
