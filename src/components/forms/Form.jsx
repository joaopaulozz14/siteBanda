import { useState } from "react";
import "./styles.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      validateForm(updatedData);
      return updatedData;
    });
  };

  const validateForm = (data) => {
    const isValid =
      data.name.length >= 5 &&
      data.phone.length >= 5 &&
      data.message.length >= 5;
    setIsValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
    console.log("Dados enviados:", formData);
    setFormData({ name: "", phone: "", message: "" });
    setIsValid(false);
  };

  return (
    <div className="main_container">
      <div className="title">
        <h1 className="band-logo" onClick={() => navigate("/")}>
          IF
          <span>
            <img
              src="/images/raio-de-trovao.png"
              alt=""
              className="header-lightning"
            />
          </span>
          MS
        </h1>
        <h2>STAY UP TO DATE</h2>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{5,}"
            placeholder="Apenas números"
            required
            id=""
          />
        </label>
        <label>
          Mensagem:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={!isValid}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
