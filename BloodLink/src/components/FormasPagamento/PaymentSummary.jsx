import React from 'react';

export default function PaymentSummary({ formData, method, price, onBack }) {
    const getMethodName = () => {
        switch (method) {
            case 'credito': return 'Cartão de Crédito';
            case 'debito': return 'Cartão de Débito';
            case 'pix': return 'Pix';
            case 'boleto': return 'Boleto';
            default: return '';
        }
    };

    return (
        <div className="payment-summary">
            <h2>Resumo do Pagamento</h2>
            <p><strong>Método:</strong> {getMethodName()}</p>
            <p><strong>Valor:</strong> R$ {price.toFixed(2).replace('.', ',')}</p>

            {(method === 'credito' || method === 'debito') && (
                <>
                    <p><strong>Nome:</strong> {formData.nome || '---'}</p>
                    <p><strong>Número:</strong> {formData.numero || '---'}</p>
                    <p><strong>Validade:</strong> {formData.validade || '---'}</p>
                </>
            )}

            {method === 'pix' && (
                <p><strong>Chave Pix:</strong> {formData.chave || 'Informada na etapa anterior'}</p>
            )}

            {method === 'boleto' && (
                <>
                    <p><strong>Nome:</strong> {formData.nome || '---'}</p>
                    <p><strong>CPF:</strong> {formData.cpf || '---'}</p>
                </>
            )}

            <div className="form-actions">
                <button onClick={onBack}>Voltar</button>
                <button className="next-button">Finalizar Pagamento</button>
            </div>
        </div>
    );
}
