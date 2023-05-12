const Contacts = () => {
    return (<main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Azerbaijan, Baku</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+79051234567">+(994) 70 880-27-61</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="kenan.akhundov95@gmail.com">kenan.akhundov95@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main>);
};
 
export default Contacts;