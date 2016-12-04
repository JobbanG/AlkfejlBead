# Dokumentáció

Készítette: Jobban Gergő

**Alap ötlet:**

A program célja, hogy a felhasználók a szerintük legjobb / kedvenc számítógépüket összerakhassák, és megoszthassák másokkal, valamint megbeszélhetik melyik alkatrészt miért választották. Ezzel segíthetnek másoknak, akik új gépet szeretnének venni.
A vendégek megnézhetik a már kész gépeket, de regisztrációra, majd bejelentkezésre lesz szükségük a további funkciók használatához.
Bejelentkezett felhasználók felvehetnek gépeket, vagy a már meglévő, saját gépeiket módosíthatják vagy törölhetik. Ezen kívül bármely géphez írhatnak megjegyzést.

**Funkcionális követelmények:**

Vendégeknek:
* Regisztráció
* Bejelentkezés
* Meglévő gépek megtekintése
  
Bejelentkezett felhasználóknak:
* Új gép felvétele
* Meglévő gépek adatainak módosítása
* Meglévő gépek törlése
* Kommentek írása

**Nem funkcionális követelmények:**

* Áttekinthetőség - Átlátható elrendezés, jó kinézet.
* Biztonságos működés - Jelszavak használata bizonyos funkciók védelmére.
* Karbantarthatóság, bővíthetőség
* Gyors működés

**Használatieset-modell**



**Végpontok**
GET/: főoldal
GET/login: bejelentkező oldal
POST/login: bejelentkezési adatok elküldése
GET/register: regisztrációs oldal
POST/register: regisztrációs adatok elküldése
GET/logout: kijelentkező oldal
GET/comp: számítógép lista oldal
GET/comp/create: új számítógép felvétele
POST/comp/create: új számítógép felvételéhez szükséges adatok elküldése
GET/comp/id: számítógép adatok
POST/comp/id: új megjegyzés felvitele
GET/comp/delete=id: számítógép törlése
GET/comp/edit=id: számítógép módosítása
POST/comp/edit=id: számítógép módosítása, adatok elküldése

**Oldalvázlatok**



**Adatmodell**

