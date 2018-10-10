# GITLAB WORKFLOW GUIDE #

Erklärung wie Gitlab verwendet wird!

## Einführung

In Gitlab gibt es verschiedene Branches. Der "Hauptbranch" heißt *master*. 
Wenn auf den *master* branch gepusht wird, werden alle Dateien und Änderungen in
das Repository übernommen. Deßhalb ist es wichtig für alle Abschnitte der Projektarbeit
Issues zu erstellen und auf einen eigenen Branch zu pushen. Dies bewirkt, dass die 
Änderungen noch nicht auf das "Haupt-Repository" übernommen werden. Wenn man fertig 
mit der Arbeit ist erstellt Man einen Merge-Request, mit welchem man die Änderungen
des eigenen Branch mit dem *master* Branch abgleicht. 

## Issues

Für jeden Teilabschnitt, wird zumindest ein Issues erstellt um einfacher die Übersicht
zu behalten. Klicke im Seitemenü auf **Issues** und dann in der rechten oberen Ecke auf 
**New Issue**. Gib einen Kurzen Titel ein und im Feld darunter wird erklärt, was
zu machen ist. 

Bei **Asignee** wählt ihr euch selbst aus und bei **Milestone**, wenn vorhanden, den
dazugehörigen Meilenstein. 

Im Feld **Labels** wird entweder ToDo, Doing oder Done ausgewählt und für welchen Teil
des Projektes das Issue ist (z.B MobileClient).

## Workflow

+ Wenn das Projekt noch nicht auf den Rechner geclont wurde ist dies der erste Schritt.
    Gehe mit der Commandline in das Verzeichnis in welchem du das Git Repository speichern willt (z.B. Documents/git).
    Dann tippe 
    ```bat  
    git clone https://gitlab.htl-leonding.ac.at/equipment-verleih/equipment-verleih.git 
    ``` 
+ Wenn du deine Arbeit abgeschlossen hast und deine Änderungen hochladen willst ist es wichtig
    zu checken in welcher Branch du dich befindest. 
    ```bat
    git branch
    ```
    Wenn du dich in der *master* Branch befindest solltest du einen eigenen erstellen.
    ```bat
    git checkout -b "DeinBranchName"
    ```
    Sollte dieser Branch bereits vorhanden Sein reicht auch 
    ```bat
    git checkout DeinBranchName
    ```
    
+ Als nächstes werden alle geänderten Dateien hinzugefüt mit 
   ```bat
   git add .
    ```
    
+ Der nächste Schritt ist der commit. Hinterlasse im commit immer einen Kommentar.
    Dieser beginnt immer entweder mit *wip* für Work-in-Progress oder *fixed* falls
    du das Issue erledigt hast. Dann wird das Issue automatisch geschlossen. Jedes Issue 
    hat einen Hashtag mit einer Nummer (z.B. #25). Der Befehl sieht dann z.B. so aus:
    ```bat
    git commit -m "wip #25 eine Beschreibung zur erledigten Arbeit" 
        oder 
    git commit -m "fixed #25 eine Beschreibung zur erledigten Arbeit" 
        falls du mit dem Issue fertig bist.
    ```
    
+ Als letztes lädst du deinen Commit hoch mit 
    ```bat
    git push
    ```
    
+ Bevor du das nächste Mal weiterarbeitest lade dir die neueste Version des Repositories
    runter mit
    ```bat
    git pull
    ```

## Merge Request

    Um deinen persönlichen Branch in den *master* Branch zu mergen musst du unter 
    Merge Request im Seitenmenü einen neuen erstellen. Überprüfe nochmal deine Änderungen 
    bevor du diesen mergst.

