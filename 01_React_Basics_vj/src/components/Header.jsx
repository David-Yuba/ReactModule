function Header(){
    const title = "Putuj Svijetom";
    const date = new Date().toDateString();
    return (
        <header>
            <h1 className="title">{title}</h1>
            <h3>{date}</h3>
        </header>
    )
}

export default Header;  