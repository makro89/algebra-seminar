const Header = (props) =>{
    /* !! ispred props. username pretvara vrijednos u boolean vrijednost*/
    const isLoggedIn = !!props.username;
    return (
    <>
    {isLoggedIn && 
    <div className="App-header">
    <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
    <h1>{props.username}'s Chat Room</h1>
    {/* Prazan div služi za flex pozicioniranje elemenata */}
    <div></div>
  </div> }

  {!isLoggedIn && <div className="App-header">
        <div></div>
    
    <h1>Chat Aplication</h1>
    {/* Prazan div služi za flex pozicioniranje elemenata */}
    <div></div>
  </div>}
    )
}
export default Header;