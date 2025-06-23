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
const [price] = useState(5.00);
const [description] = useState("Plano BloodCore");

const handleNext = () => {
  if (method) setStep(2);
  else alert('Selecione uma forma de pagamento');
};
  return (
       <div className="payment-wizard-wrapper">
  <div className="checkout-wrapper">
    <div className="checkout-panel">
      {/* Etapa 1 – Selecionar método de pagamento */}
      {step === 1 && (
        <div className="checkout-panel-body">
          <h2 className="checkout-title">BloodLink - Checkout</h2>
          <PaymentMethodSelector
            method={method}
            setMethod={setMethod}
            onNext={() => setStep(2)}
            price={price}
            description={description}
          />
        </div>
      )}

      {/* Etapa 2 – Formulário do método selecionado */}
      {step === 2 && (
        <div className="checkout-panel-body">
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
        </div>
      )}

      {/* Etapa 3 – Resumo final */}
      {step === 3 && (
        <div className="checkout-panel-body">
          <PaymentSummary
            formData={formData}
            method={method}
            price={price}
            onBack={() => setStep(2)}
          />
        </div>
      )}
    </div>
  </div>
</div>

  );
}