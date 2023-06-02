
import { useForm } from "react-hook-form";
import validator from "validator";
const GoodForm = () => {
  const {register, handleSubmit, formState: {errors}, watch} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  };
  const watchPassword = watch('password')
  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Seu nome"
          {...register("name", {required: true, maxLength: 20})}
        />
        {(errors?.name?.type === 'required' && <p className="error-message">Campo obrigatório</p>) 
        || (errors?.name?.type === 'maxLength' && <p className="error-message">O limite de letras é 20</p>)}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          // className={errors?.email && "input-error"}
          type="email"
          placeholder="Seu e-mail"
          {...register("email", 
          {
            required: true, 
            validate:  (value) => {
              return validator.isEmail(value)
            }
          })}
        />
         {(errors?.email?.type === 'required' && <p className="error-message">Campo obrigatório</p>) 
        || (errors?.email?.type === 'validate' && <p className="error-message">Email invalido</p>)}
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          // className={errors?.password && "input-error"}
          type="password"
          placeholder="Senha"
          {...register("password", {required: true, minLength: 7})}
        />
        {(errors?.password?.type === 'required' && <p className="error-message">Campo obrigatório</p>) 
        || (errors?.password?.type === 'minLength' && <p className="error-message">O mínimo de caracteres é 7</p>)}
      </div>

      <div className="form-group">
        <label>Confirmar senha</label>
        <input
          // className={errors?.password && "input-error"}
          type="password"
          placeholder="Digite sua senha novamente"
          {...register("confirmPassword", {required: true, validate: (value) => value === watchPassword})}
        />
        {(errors?.confirmPassword?.type === 'required' && <p className="error-message">Campo obrigatório</p>) 
        || (errors?.confirmPassword?.type === 'validate' && <p className="error-message">As senhas são diferentes</p>)}
      </div>

      <div className="form-group">
        <label>Profissão</label>
        <select
          // className={errors?.profession && "input-error"}
          {...register("profession", {validate: (value) => value !== '0'})}
        >
          <option value="0">Selecione sua profissão...</option>
          <option value="developer">Desenvolvedor</option>
          <option value="other">Outra</option>
        </select>
        {errors?.profession?.type === 'validate' && <p className="error-message">Selecione uma profissão</p>}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="privacy-policy"
            {...register("privacyTerms", {required: true})}
          />
          <label>I agree with the privacy terms.</label>
        </div>
        {errors?.privacyTerms?.type === 'required' && <p className="error-message">Campo obrigatório</p>}
      </div>

      <div className="form-group">
        <button onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
      </div>
    </div>
  );
};

export default GoodForm;


