<script>
const dinos = [
{name:"T-Rex",emoji:"🦖",cat:"Karnivora",desc:"Tyrannosaurus Rex, raja dinosaurus pemakan daging.",habitat:"Amerika Utara",food:"Daging dinosaurus lain",size:"Panjang 12 m, tinggi 4 m",weight:"Sekitar 8 ton",era:"Zaman Kapur, 68 juta tahun lalu",extinct:"Punah 66 juta tahun lalu akibat asteroid jatuh di Mexico yang menyebabkan perubahan iklim besar.",fact:"Aku punya gigi tajam, tubuh besar, dan suara mengaum. Namaku T-Rex!"},
{name:"Triceratops",emoji:"🦏",cat:"Herbivora",desc:"Dinosaurus bertanduk tiga dan berleher pelindung.",habitat:"Amerika Utara",food:"Tumbuhan dan dedaunan",size:"Panjang 9 m, tinggi 3 m",weight:"Sekitar 6 ton",era:"Zaman Kapur, 68 juta tahun lalu",extinct:"Punah bersamaan dengan T-Rex akibat asteroid besar 66 juta tahun lalu.",fact:"Aku punya tiga tanduk di kepala dan suka makan tumbuhan."},
{name:"Velociraptor",emoji:"🦎",cat:"Karnivora",desc:"Dinosaurus kecil cepat dan cerdas.",habitat:"Asia (Mongolia)",food:"Daging hewan kecil",size:"Panjang 2 m, tinggi 0,5 m",weight:"Sekitar 15 kg",era:"Zaman Kapur, 75 juta tahun lalu",extinct:"Punah 66 juta tahun lalu akibat asteroid dan perubahan iklim global.",fact:"Aku kecil, cepat berlari, dan pintar berburu."},
{name:"Brachiosaurus",emoji:"🦕",cat:"Herbivora",desc:"Dinosaurus berleher sangat panjang.",habitat:"Amerika Utara & Afrika",food:"Daun pohon tinggi",size:"Panjang 26 m, tinggi 12 m",weight:"Sekitar 30 ton",era:"Zaman Jura, 154 juta tahun lalu",extinct:"Punah sekitar 145 juta tahun lalu karena perubahan iklim dan makanan berkurang.",fact:"Leherku sangat panjang untuk makan daun di puncak pohon."},
{name:"Stegosaurus",emoji:"🦔",cat:"Herbivora",desc:"Dinosaurus dengan lempeng tulang di punggung.",habitat:"Amerika Utara & Eropa",food:"Tumbuhan rendah",size:"Panjang 9 m, tinggi 4 m",weight:"Sekitar 5 ton",era:"Zaman Jura, 150 juta tahun lalu",extinct:"Punah sekitar 145 juta tahun lalu karena perubahan lingkungan.",fact:"Punggungku punya lempeng tajam untuk melindungi diri."},
{name:"Pterodactyl",emoji:"🦅",cat:"Terbang",desc:"Reptil terbang purba dengan sayap lebar.",habitat:"Langit purba Eropa",food:"Ikan dan serangga",size:"Lebar sayap 1 m",weight:"Sekitar 2 kg",era:"Zaman Jura-Kapur, 150 juta tahun lalu",extinct:"Punah 66 juta tahun lalu karena asteroid menghancurkan ekosistem.",fact:"Aku bisa terbang tinggi di langit purba!"},
{name:"Plesiosaurus",emoji:"🐊",cat:"Laut",desc:"Reptil laut berleher panjang.",habitat:"Laut purba Eropa",food:"Ikan dan cumi-cumi",size:"Panjang 3,5 m",weight:"Sekitar 450 kg",era:"Zaman Jura, 200 juta tahun lalu",extinct:"Punah 66 juta tahun lalu saat laut berubah dan asteroid jatuh.",fact:"Aku hidup di laut dengan leher panjang."},
{name:"Ankylosaurus",emoji:"🐢",cat:"Herbivora",desc:"Dinosaurus berzirah tebal seperti tank.",habitat:"Amerika Utara",food:"Tumbuhan",size:"Panjang 9 m, tinggi 2 m",weight:"Sekitar 6 ton",era:"Zaman Kapur, 68 juta tahun lalu",extinct:"Punah 66 juta tahun lalu akibat asteroid besar.",fact:"Tubuhku berzirah keras dan ekorku seperti palu."},
{name:"Diplodocus",emoji:"🦕",cat:"Herbivora",desc:"Dinosaurus berleher panjang dan ekor cambuk.",habitat:"Amerika Utara",food:"Daun dan tumbuhan",size:"Panjang 27 m, tinggi 5 m",weight:"Sekitar 15 ton",era:"Zaman Jura, 154 juta tahun lalu",extinct:"Punah 145 juta tahun lalu karena perubahan iklim.",fact:"Ekorku panjang seperti cambuk!"},
{name:"Spinosaurus",emoji:"🐊",cat:"Karnivora",desc:"Dinosaurus dengan layar di punggung.",habitat:"Afrika Utara",food:"Ikan dan daging",size:"Panjang 15 m, tinggi 4 m",weight:"Sekitar 7 ton",era:"Zaman Kapur, 95 juta tahun lalu",extinct:"Punah 93 juta tahun lalu karena perubahan laut dan iklim.",fact:"Punggungku punya layar besar dan aku suka ikan."},
{name:"Parasaurolophus",emoji:"🦎",cat:"Herbivora",desc:"Dinosaurus berjambul panjang di kepala.",habitat:"Amerika Utara",food:"Tumbuhan",size:"Panjang 10 m, tinggi 4 m",weight:"Sekitar 2,5 ton",era:"Zaman Kapur, 75 juta tahun lalu",extinct:"Punah 66 juta tahun lalu akibat asteroid besar.",fact:"Kepalaku punya jambul panjang seperti terompet."},
{name:"Allosaurus",emoji:"🦖",cat:"Karnivora",desc:"Pemangsa besar zaman Jurassic.",habitat:"Amerika Utara & Eropa",food:"Daging dinosaurus",size:"Panjang 9 m, tinggi 3 m",weight:"Sekitar 2 ton",era:"Zaman Jura, 150 juta tahun lalu",extinct:"Punah 145 juta tahun lalu karena perubahan iklim.",fact:"Aku pemburu ganas zaman Jurassic."}
];

let curCat="Semua";
function showPage(id,btn){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
if(btn)btn.classList.add('active');
if(id==='learn')renderList();
if(id==='quiz')startQuiz();
}
function renderFilter(){
const cats=["Semua",...new Set(dinos.map(d=>d.cat))];
document.getElementById('filter').innerHTML=cats.map(c=>`<button class="${c===curCat?'active':''}" onclick="setCat('${c}')">${c}</button>`).join('');
}
function setCat(c){curCat=c;renderFilter();renderList();}
function renderList(){
const data=curCat==="Semua"?dinos:dinos.filter(d=>d.cat===curCat);
document.getElementById('list').innerHTML=data.map(d=>{
const i=dinos.indexOf(d);
return `<div class="card" onclick="showDetail(${i})"><span class="emoji">${d.emoji}</span><div class="name">${d.name}</div><div class="cat">${d.cat}</div></div>`;
}).join('');
}
function showDetail(i){
const d=dinos[i];
document.getElementById('modalBody').innerHTML=`
<div class="bigemoji" onclick="speakName(${i})">${d.emoji}</div>
<h2>${d.name}</h2>
<div class="section"><div class="title">📖 Deskripsi</div><div class="val">${d.desc}</div></div>
<div class="section"><div class="title">⏳ Kapan Hidup</div><div class="val">${d.era}</div></div>
<div class="section"><div class="title">📏 Ukuran</div><div class="val">${d.size}</div></div>
<div class="section"><div class="title">⚖️ Berat</div><div class="val">${d.weight}</div></div>
<div class="section"><div class="title">🌍 Habitat</div><div class="val">${d.habitat}</div></div>
<div class="section"><div class="title">🍽️ Makanan</div><div class="val">${d.food}</div></div>
<div class="section"><div class="title">✨ Fakta Menarik</div><div class="val">${d.fact}</div></div>
<div class="section extinct"><div class="title">💀 Bagaimana Punah?</div><div class="val">${d.extinct}</div></div>
<button class="btn-sound" onclick="speakAll(${i})">🔊 Dengarkan Semua</button>`;
document.getElementById('modal').classList.add('show');
speak(d.fact);
}
function speakName(i){speak(dinos[i].name);}
function speakAll(i){
const d=dinos[i];
speak(`Ini ${d.name}. ${d.desc}. Hidup pada ${d.era}. ${d.size}. Berat ${d.weight}. Habitat di ${d.habitat}. Makanan ${d.food}. Fakta menarik: ${d.fact}. ${d.extinct}`);
}
function closeModal(){document.getElementById('modal').classList.remove('show');if('speechSynthesis' in window)speechSynthesis.cancel();}
function speak(t){
if('speechSynthesis' in window){
const u=new SpeechSynthesisUtterance(t);
u.lang='id-ID';u.rate=.9;
speechSynthesis.cancel();
speechSynthesis.speak(u);
}
}
