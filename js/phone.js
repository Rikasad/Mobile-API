const loadPhone = async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);

}


const displayPhones = phones => {

    // 1.Get the container
    const phoneContainer = document.getElementById('phone-container');
    // clear phone Container cards before adding new cards
    phoneContainer.textContent = '';
    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
        

    }
    else{
        showAllContainer.classList.add('hidden');
    }





    // display first 12

    phones = phones.slice(0,12);




    phones.forEach(phones => {
        console.log(phones) ;
        // 2. Create a Div  
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  bg-gray-100 shadow-xl`;
        // 3. Set inner HTML
        phoneCard.innerHTML=`
        <figure class="px-10 pt-10">
        <img src="${phones.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phones.phone_name}</h2>
        <p>${phones.slug}</p>
        <p class="card-title">$999</p>
        
        <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
        </div>
        </div>
        
        `;
        // 4.Append Child
        phoneContainer.appendChild(phoneCard);

    });
    // hide loading spinner
    toggleLoadingSpinner(false);
    

}
const handleSearch = () =>{
    // console.log('search Handle')
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}
const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
if(isLoading){
    loadingSpinner.classList.remove('hidden')
}else{
    loadingSpinner.classList.add('hidden')
}
    
}


// loadPhone();