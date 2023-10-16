import './NavBar.css'
function Navbar(hamburger)
{
    return(
        <>
<div className='Navbar'>

    <div className='left-side'>
        <div className='logo'><img src="https://static.beeunicorn.com/shop-website/images/logos/218ce8ca9c8134e370b07eed51f5f7eb7ccb5317.png" alt="logo" width="245px"/></div>
        <ul className='options'>
        <li className='personalgadgets'>PERSONAL GADGETS</li>
        <li className='homeandliving'>HOME & LIVING</li>
     </ul>
    </div>

<div className='searchbar'>
        <div className='searchtext'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'alt=" " width={"20px"}/><input type='text' placeholder='Search for products, brands and more'/></div>
    </div>
    <div className='right-side'>

        <div className='profile-logo'><img src='https://icon-library.com/images/profile-icon-white/profile-icon-white-11.jpg' alt="" width={"15px"}/>Profile</div>
        <div className='wishlist-logo'><img src='https://icons.veryicon.com/png/o/commerce-shopping/fine-edition-mall-icon/wishlist-1.png' alt="" width={"15px"}/>Whishlist</div>
        <div className='bag-logo'><img src='https://cdn2.shopify.com/s/files/1/1838/5549/t/5/assets/shopping_bag.png?779' alt="" width={"15px"}/>Bag</div>
    </div>
        
</div>

<div className='line'></div>
       </>
    );
}
export default Navbar;