import "./Pagamento.css";
import React, { useState } from 'react';
import CardPaymentForm from '../../components/FormasPagamento/CardPaymentForm';
import PixForm from "../../components/FormasPagamento/PixForm";
import BoletoForm from "../../components/FormasPagamento/BoletoForm";
import PaymentSummary from "../../components/FormasPagamento/PaymentSummary";
import PaymentMethodSelector from "../../components/FormasPagamento/PaymentMethodSelector";
import { Link } from 'react-router-dom';

export default function PaymentWizard() {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('');
  const [formData, setFormData] = useState({});
const [price] = useState(10.00);
const [description] = useState("Plano");

const handleNext = () => {
  if (method) setStep(2);
  else alert('Selecione uma forma de pagamento');
};
  return (
        <div className="payment-wizard-wrapper">
    <div className="wizard">
  {step === 1 && (
  <PaymentMethodSelector
    method={method}
    setMethod={setMethod}
    onNext={() => setStep(2)}
    price={price}
    description={description}
  />
)}
      {step === 2 && (
        <>
          {(method === 'credito' || method === 'debito') && (
            <CardPaymentForm
              type={method}
              formData={formData}
              setFormData={setFormData}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
         {method === 'pix' && (
  <PixForm
    formData={formData}
    setFormData={setFormData}
    onNext={() => setStep(3)}
    onBack={() => setStep(1)}
  />
)}
          {method === 'boleto' && (
  <BoletoForm
    formData={formData}
    setFormData={setFormData}
    onNext={() => setStep(3)}
    onBack={() => setStep(1)}
  />
)}
        </>
      )}

      {step === 3 && (
  <PaymentSummary
    formData={formData}
    method={method}
    price={price}     // <-- não esqueça isso!
    onBack={() => setStep(2)}
  />
)}
    </div>
     </div>
  );
}