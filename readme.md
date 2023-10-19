#Consegna:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

**MILESTONE 2:**
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

## Dati
1. Chiedi quanti km deve percorrere
0. Chiedi quanti hanni hai
0. Scrivi sulla pagina il costo del biglietto

## Logica del programma
1. Chiedi quanti km deve percorrere
    - moltiplica per la tariffa
0. Chiedi quanti hanni hai
    - Se < 18 applica sconto 20%
    - Se < 65 applica sconto 40%
0. Trasforma il risultato mantenedo due cifre dopo la virgola
0. Prepara il messaggio

## Output 

Scriviamo in pagina prezzo finale
