# Guida per gestire PR e per creare branch remoti direttamente dal progetto

1. Aprire il task dal progetto e convertirlo in un issue
2. comparirà un menù a tendina per scegliere la repo a cui collegarlo, scegliere la repo(in questo caso prova-frontend)
3. Comparira un url in blu in basso a destra "**create branch**", cliccarlo.
4. Scegliere un nome per il branch (se i nomi delle task sono scritti bene, è possibile lasciare quel nome e sarebbe molto utile fare cosi.)
5. Lasciare il flag impostato su "**checkout locally**"
6. Scegliere repository destination e branch source(di default sono impostati correttamente e non c'è bisogno di cambiarli)
7. Cliccare il pulsante verde "**create branch**"

Adesso è stato creato un branch in remoto. Dobbiamo fare la stessa cosa in locale.

Presupponendo di avere gia la repo clonata in locale, i comandi da eseguire per collegare il branch locale a quello in remoto sono:

- `#### git fetch origin`

- `#### git checkout nome_branch`(per convenzione meglio che sia uguale a quello creato in remoto quindi uguale al nome del task del progetto)

Adesso si puo lavorare in locale sul branch, fare quello che si deve fare, committare, pushare e aprire una pull request.

## Esempio

Sto facendo delle prove, ho creato il setup per l'ambiente di sviluppo sul branch set-up-ambiente-sviluppo,  
Dal branch main:

- `#### git fetch origin`

- `#### git checkout set-up-ambiente-sviluppo`

Ho committato e successivamente pushato:

- `#### git commit -m "messaggio del commit"`

- `#### git push origin set-up-ambiente-sviluppo` (ho mandato le modifiche sul branch locale al branch in remoto)

Ora sto aprendo una pull request e in base a come ha gestito i permessi Samuel, dovrebbe accettare lui la mia pull request(dopo aver visto e controllato quello che ho fatto), oppure se ha gestito la cosa in modo diverso, puo darsi che tutti e due voi, dobbiate guardare i cambiamenti e accettare la pull request. La Pr può essere approvata da voi/Samuel, oppure si possono lasciare dei commenti e chiedere delle modifiche prima di approvarla. Una volta approvata chi gestisce il repo o chi ha i permessi, puo mergeare la pr da interfaccia grafica di github, dovrebbe comparire un pulsante "MERGE".

Quando viene eseguito il merge, Git crea un nuovo commit nel branch main che include tutte le modifiche dal tuo branch (ad esempio set-up-ambiente-sviluppo).
Adesso, tecnicamente il branch branch non serve più, a meno che non si voglia continuare a lavorare su di esso, ma normalmente viene eliminato (sia localmente che su GitHub) per mantenere il repository ordinato.

Per eliminare un branch locale, assicuriamoci di essere su un altro branch (ad esempio main) prima di eliminarlo.  
Comandi per eliminazione branch locale:

- `#### git checkout main` (cambiamo branch)

- `#### git branch -d set-up-ambiente-sviluppo`

(Il comando -d sta per "delete" ed elimina il branch locale solo se è già stato unito (merged) al branch di destinazione (ad esempio main))

Verifica che il branch locale sia stato eliminato effettivamente:

- `#### git branch (il branch non dovrebbe piu comparire)`

Comandi per eliminazione branch remoto:

- `#### git push origin --delete set-up-ambiente-sviluppo`

- `#### Questo probabilmente si puo fare anche da interfaccia grafica su github`

Verifica che il branch remoto sia stato eliminato effettivamente:

- `#### git branch -r (il branch non dovrebbe piu comparire)`

Dopo il merge, ci dobbiamo assicurare di scaricare le modifiche fatte al main in remoto anche in locale (un git pull dal branch main):
quindi dopo il merge, in locale eseguiremo questi comandi:

- `#### git checkout main`

- `#### git pull origin main`
