# final-student-management-api
CustomisedHooks:
  -createhooks.ts(hooks pour créer un admin)
  -deletehooks.ts(hooks pour supprimer un admin à partir de son id)
  -getallhooks.ts(hooks pour récupérer les admins)
  -getsinglehooks.ts(hooks pour récupérer un admin avec son id)
 
 Models:
  -admin_interface(contient l'interface IAdmin pour les fonctions génériques)
  -admin_model(un model vide admin)
  
 Provider:
  -AdminProvider(Contient le component AdminProvider ainsi que l'AdminContext
  pour modifier et creer les states partageables entre tous les components)
