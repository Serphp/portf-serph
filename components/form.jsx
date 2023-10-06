
export default function Formulario() {
    return (
    <>
    <div className="mainbg">
    <h6 className="subtitle"><i class="fa fa-box-open"></i> Servicios profesionales </h6>
    <h2> Freelance </h2>
    <div className="mb-5"></div>

<form >
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
</form>


    </div>
    </>
    );
    }