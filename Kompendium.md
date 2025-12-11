# Kompendium: Examinationsprojekt - Fullstack Developer
## Innehållsförteckning
1. [Komma igång med projektet](#komma-igång-med-projektet)
2. [Projektstruktur och setup](#projektstruktur-och-setup)
3. [Datahantering och API-anrop](#datahantering-och-api-anrop)
4. [Axios Interceptors](#axios-interceptors)
5. [Autentisering](#autentisering)
6. [Vanliga mönster och best practices](#vanliga-mönster-och-best-practices)
7. [Felsökning och tips](#felsökning-och-tips)
---
## Komma igång med projektet
### Steg 1: Projektplanering
Innan du börjar koda är det viktigt att planera:
1. **Läs igenom examinationsuppgiften noggrant**
- Vad ska projektet göra?
- Vilka krav finns det?
- Vilka funktioner är obligatoriska vs. valfria?
2. **Skissa upp din applikation**
- Rita wireframes (enklare skisser) av sidorna
- Identifiera vilka komponenter du behöver
- Tänk på användarflödet
3. **Planera din datastruktur**
- Vilka entiteter behöver du? (t.ex. User, Product, Order)
- Vilka relationer finns mellan dem?
- Vilka fält behöver varje entitet?
### Steg 2: Projektetup med Vite
```bash
# Skapa nytt React-projekt med Vite
npm create vite@latest mitt-projekt -- --template react
# Navigera till projektmappen
cd mitt-projekt
# Installera dependencies
npm install
# Installera vanliga paket du behöver
npm install axios react-router-dom
# Starta utvecklingsservern
npm run dev
```
### Steg 3: Grundstruktur
Organisera ditt projekt enligt följande struktur:
```
mitt-projekt/
├── src/
│ ├── components/ # Återanvändbara komponenter
│ │ ├── common/ # Gemensamma komponenter (Button, Input, etc.)
│ │ └── features/ # Featurespecifika komponenter
│ ├── pages/ # Sidkomponenter (routes)
│ ├── hooks/ # Custom hooks
│ ├── context/ # Context providers
│ ├── services/ # API-anrop och externa tjänster
│ ├── utils/ # Hjälpfunktioner
│ ├── assets/ # Bilder, ikoner, etc.
│ ├── App.jsx # Huvudkomponent
│ └── main.jsx # Entry point
├── public/ # Statiska filer
└── package.json
```
---
## Projektstruktur och setup
### Environment Variables
Skapa en `.env`-fil i projektets rot för att hantera miljövariabler:
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Mitt Projekt
```
**Viktigt:** Alla variabler måste börja med `VITE_` för att vara tillgängliga i
koden.
Använd dem i koden:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```
### Routing med React Router
```javascript
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<LoginPage />} />
<Route
path="/dashboard"
element={
<ProtectedRoute>
<DashboardPage />
</ProtectedRoute>
}
/>
</Routes>
</BrowserRouter>
);
}
```
### Context för Global State
```javascript
// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();
export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
// Kontrollera om användare är inloggad vid start
const token = localStorage.getItem('token');
if (token) {
// Hämta användardata
// setUser(userData);
}
setLoading(false);
}, []);
const login = async (email, password) => {
// Login-logik här
};
const logout = () => {
localStorage.removeItem('token');
setUser(null);
};
return (
<AuthContext.Provider value={{ user, login, logout, loading }}>
{children}
</AuthContext.Provider>
);
}
export const useAuth = () => {
const context = useContext(AuthContext);
if (!context) {
throw new Error('useAuth måste användas inom AuthProvider');
}
return context;
};
```
---
## Datahantering och API-anrop
### Hur data ser ut
När du arbetar med API:er kommer data oftast i JSON-format:
```json
{
"id": 1,
"name": "John Doe",
"email": "john@example.com",
"createdAt": "2025-01-15T10:30:00Z"
}
```
Eller som arrayer:
```json
[
{
"id": 1,
"title": "Produkt 1",
"price": 299
},
{
"id": 2,
"title": "Produkt 2",
"price": 499
}
]
```
### Axios Setup
Skapa en axios-instans för dina API-anrop:
```javascript
// src/services/api.js
import axios from 'axios';
const api = axios.create({
baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
timeout: 10000,
headers: {
'Content-Type': 'application/json',
},
});
export default api;
```
### Vanliga API-operationer
#### GET - Hämta data
```javascript
// Hämta alla produkter
const fetchProducts = async () => {
try {
const response = await api.get('/products');
return response.data;
} catch (error) {
console.error('Fel vid hämtning av produkter:', error);
throw error;
}
};
// Hämta en specifik produkt
const fetchProduct = async (id) => {
try {
const response = await api.get(`/products/${id}`);
return response.data;
} catch (error) {
console.error('Fel vid hämtning av produkt:', error);
throw error;
}
};
```
#### POST - Skapa ny data
```javascript
const createProduct = async (productData) => {
try {
const response = await api.post('/products', productData);
return response.data;
} catch (error) {
console.error('Fel vid skapande av produkt:', error);
throw error;
}
};
// Användning i komponent
const handleSubmit = async (e) => {
e.preventDefault();
try {
const newProduct = await createProduct({
title: 'Ny produkt',
price: 299,
});
console.log('Produkt skapad:', newProduct);
} catch (error) {
// Hantera fel
}
};
```
#### PUT/PATCH - Uppdatera data
```javascript
// PUT - Ersätter hela objektet
const updateProduct = async (id, productData) => {
try {
const response = await api.put(`/products/${id}`, productData);
return response.data;
} catch (error) {const fetchProducts = async () => {
try {
const response = await api.get('/products');
return response.data;
} catch (error) {
console.error('Fel vid hämtning av produkter:', error);
throw error;
}
};
// Hämta en specifik produkt
const fetchProduct = async (id) => {
try {
const response = await api.get(`/products/${id}`);
return response.data;
} catch (error) {
console.error('Fel vid hämtning av produkt:', error);
throw error;
}
};
```
#### POST - Skapa ny data
```javascript
const createProduct = async (productData) => {
try {
const response = await api.post('/products', productData);
return response.data;
} catch (error) {
console.error('Fel vid skapande av produkt:', error);
throw error;
}
};
// Användning i komponent
const handleSubmit = async (e) => {
e.preventDefault();
try {
const newProduct = await createProduct({
title: 'Ny produkt',
price: 299,
});
console.log('Produkt skapad:', newProduct);
} catch (error) {
// Hantera fel
}
};
```
#### PUT/PATCH - Uppdatera data
```javascript
// PUT - Ersätter hela objektet
const updateProduct = async (id, productData) => {
try {
const response = await api.put(`/products/${id}`, productData);
return response.data;
} catch (error) {
console.error('Fel vid uppdatering:', error);
throw error;
}
};
// PATCH - Uppdaterar endast specifika fält
const updateProductPrice = async (id, price) => {
try {
const response = await api.patch(`/products/${id}`, { price });
return response.data;
} catch (error) {
console.error('Fel vid uppdatering:', error);
throw error;
}
};
```
#### DELETE - Ta bort data
```javascript
const deleteProduct = async (id) => {
try {
await api.delete(`/products/${id}`);
console.log('Produkt borttagen');
} catch (error) {
console.error('Fel vid borttagning:', error);
throw error;
}
};
```
### Använda API i komponenter med Hooks
```javascript
// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import api from '../services/api';
export function useProducts() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
const fetchProducts = async () => {
try {
setLoading(true);
const data = await api.get('/products');
setProducts(data.data);
setError(null);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
};
fetchProducts();
}, []);
const addProduct = async (productData) => {
try {
const response = await api.post('/products', productData);
setProducts([...products, response.data]);
return response.data;
} catch (err) {
setError(err.message);
throw err;
}
};
return { products, loading, error, addProduct };
}
// Användning i komponent
import { useProducts } from '../hooks/useProducts';
function ProductsPage() {
const { products, loading, error, addProduct } = useProducts();
if (loading) return <div>Laddar...</div>;
if (error) return <div>Fel: {error}</div>;
return (
<div>
{products.map((product) => (
<div key={product.id}>{product.title}</div>
))}
</div>
);
}
```
---
## Axios Interceptors
Interceptors låter dig intercepta (fånga upp) requests och responses innan de
hanteras. Detta är perfekt för att lägga till tokens, hantera fel, etc.
### Request Interceptor
Lägger till token till varje request:
```javascript
// src/services/api.js
import axios from 'axios';
const api = axios.create({
baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
});
// Request interceptor - körs innan varje request skickas
api.interceptors.request.use(
(config) => {
// Hämta token från localStorage
const token = localStorage.getItem('token');
// Om token finns, lägg till den i headers
if (token) {
config.headers.Authorization = `Bearer ${token}`;
}
return config;
},
(error) => {
// Om något går fel i request-konfigurationen
return Promise.reject(error);
}
);
```
### Response Interceptor
Hanterar responses och fel globalt:
```javascript
// Response interceptor - körs efter varje response
api.interceptors.response.use(
(response) => {
// Om allt går bra, returnera bara data-delen
return response;
},
(error) => {
// Hantera olika felkoder
if (error.response) {
// Servern svarade med en felkod
switch (error.response.status) {
case 401:
// Unauthorized - token är ogiltig eller saknas
localStorage.removeItem('token');
// Redirect till login
window.location.href = '/login';
break;
case 403:
// Forbidden - användaren har inte behörighet
console.error('Du har inte behörighet');
break;
case 404:
// Not found
console.error('Resursen hittades inte');
break;
case 500:
// Server error
console.error('Serverfel');
break;
default:
console.error('Ett fel uppstod:', error.response.data);
}
} else if (error.request) {
// Request skickades men inget svar mottogs
console.error('Inget svar från servern');
} else {
// Något annat gick fel
console.error('Fel:', error.message);
}
return Promise.reject(error);
}
);
```
### Komplett API-fil med Interceptors
```javascript
// src/services/api.js
import axios from 'axios';
const api = axios.create({
baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
timeout: 10000,
headers: {
'Content-Type': 'application/json',
},
});
// Request interceptor
api.interceptors.request.use(
(config) => {
const token = localStorage.getItem('token');
if (token) {
config.headers.Authorization = `Bearer ${token}`;
}
return config;
},
(error) => {
return Promise.reject(error);
}
);
// Response interceptor
api.interceptors.response.use(
(response) => response,
(error) => {
if (error.response?.status === 401) {
localStorage.removeItem('token');
window.location.href = '/login';
}
return Promise.reject(error);
}
);
export default api;
```
---
## Autentisering
### Hur autentisering fungerar
1. **Användaren loggar in** med email och lösenord
2. **Servern validerar** uppgifterna
3. **Servern skickar tillbaka en token** (JWT - JSON Web Token)
4. **Token sparas** i localStorage eller cookies
5. **Token skickas med** varje request i Authorization-header
6. **Servern validerar token** vid varje request
I praktiken består lösningen ofta av två tokens:
- **accessToken**: kortlivad, används för alla API-anrop (skickas i `Authorization:
Bearer ...`).
- **refreshToken**: längre livslängd, används enbart för att hämta en ny
accessToken när den gått ut.
För att slippa duplicera konfiguration skapar vi en återanvändbar Axios-klient med
delade inställningar (bas-URL, headers) och en interceptor som t.ex.:
- injicerar aktuell accessToken på varje request
- fångar 401-svar, försöker byta till ny accessToken via refreshToken och repeterar
anropet
---
## Felsökning och tips
### Vanliga problem och lösningar
#### 1. CORS-fel
**Problem:** `Access to XMLHttpRequest has been blocked by CORS policy`
**Lösning:**
- Kontrollera att backend-servern tillåter requests från din frontend-URL
- I utveckling kan du använda en proxy i `vite.config.js`:
```javascript
export default {
server: {
proxy: {
'/api': {
target: 'http://localhost:3000',
changeOrigin: true,
},
},
},
};
```
#### 2. Token försvinner vid refresh
**Problem:** Användaren loggas ut när sidan laddas om
**Lösning:**
- Kontrollera att token sparas korrekt i localStorage
- Verifiera att AuthContext läser token vid mount
#### 3. State uppdateras inte
**Problem:** Komponenten visar inte ny data efter API-anrop
**Lösningar:**
- Kontrollera att du använder `setState` korrekt
- Verifiera att dependencies i `useEffect` är korrekta
- Använd funktionell uppdatering: `setState(prev => [...prev, newItem])`
#### 4. Infinite loop i useEffect
**Problem:** `useEffect` körs om och om igen
**Lösning:**
- Lägg till korrekta dependencies
- Använd `useCallback` för funktioner i dependencies
- Kontrollera att du inte uppdaterar state som är i dependencies
### Debugging-tips
1. **Använd console.log strategiskt**
```javascript
console.log('Data:', data);
console.log('Loading:', loading);
console.log('Error:', error);
```
2. **React DevTools**
- Installera React DevTools extension
- Inspektera komponenter och state
3. **Network-tabben i DevTools**
- Se alla API-anrop
- Kontrollera headers, payload och response
4. **Kontrollera localStorage**
```javascript
console.log('Token:', localStorage.getItem('token'));
console.log('User:', localStorage.getItem('user'));
```
### Checklista innan inlämning
- [ ] Alla routes fungerar korrekt
- [ ] Autentisering fungerar (login/logout)
- [ ] Protected routes är skyddade
- [ ] API-anrop fungerar med korrekt token
- [ ] Felhantering finns på plats
- [ ] Loading states visas
- [ ] Inga console.errors i konsolen
- [ ] Koden är strukturerad och kommenterad
- [ ] Git är konfigurerat och commits är gjorda
- [ ] README.md beskriver projektet