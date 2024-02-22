
export default function Formulario() {
    return (
    <>
        <div className="mainbgs">
        <h6 className="subtitle"><i className="fa fa-box-open"></i> Contactame </h6>
        <h2> Contact </h2>
        <div className="mb-5"></div>

        <form >
            <label>Name</label>
            <input type="text" name="user_name" />

            <br/>

            <label>Email</label>
            <input type="email" name="user_email" />

            <br/>

            <label>Message</label>
            <textarea name="message" />

            <br/>

            <input type="submit" value="Send" />
        </form>


    </div>
    </>
    );
    }