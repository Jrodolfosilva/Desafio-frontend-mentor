function showMenu(){

const features = document.querySelector('.item_menu.features,.item_menu_features');
const featuresBox = document.querySelector('.conteudo.features');

const company = document.querySelector('.item_menu.company,.item_menu_company')
const companyBox = document.querySelector('.conteudo.company');

const setaFeatures = document.querySelector('.seta_features')
const setaCompany = document.querySelector('.seta_company');

const menuBurguer = document.querySelector('.menu_burger');
const menuMobile = document.querySelector('.box_mobile')
const closeBurguer = document.querySelector('.close_mobile');


const main = document.querySelector('body')

features.addEventListener('click', ()=>{
    featuresBox.classList.toggle('ativo');
    companyBox.classList.remove('ativo');
    
    setaFeatures.classList.toggle('rote');
    setaCompany.classList.remove('rote');
    
})

company.addEventListener('click', ()=>{
    companyBox.classList.toggle('ativo');
    featuresBox.classList.remove('ativo');
    
    setaCompany.classList.toggle('rote');
    setaFeatures.classList.remove('rote');

})
menuBurguer.addEventListener('click',()=>{
    menuMobile.classList.add('ativo')
    main.classList.add('js')
})

closeBurguer.addEventListener('click',()=>{
    menuMobile.classList.remove('ativo')
    main.classList.remove('js')
})
}
showMenu()

const companyFly = document.querySelector('.conteudo_company_fly')
const setaCompany = document.querySelector('.seta_company_fly')
const featuresyFly = document.querySelector('.conteudo_features_fly')
const setaFeatures = document.querySelector('.seta_features_fly')
function mobileFeatures(){
    featuresyFly.classList.toggle('ativo')
    setaFeatures.classList.toggle('rote');
    companyFly.classList.remove('ativo')
    
}
function mobileCompany(){
    companyFly.classList.toggle('ativo')
    setaCompany.classList.toggle('rote');
    featuresyFly.classList.remove('ativo')
}
