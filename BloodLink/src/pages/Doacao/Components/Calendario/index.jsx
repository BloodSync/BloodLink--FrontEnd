import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';
import { ptBR } from 'date-fns/locale';

export default function Calendario({ onSelectDate }) {
  const [value, setValue] = useState(new Date());

  const handleChange = (date) => {
    setValue(date);
    onSelectDate(date);
  };

  return (
    <div className="calendario-container">
      <h3>Escolha uma data disponível</h3>
      <Calendar
        onChange={handleChange}
        value={value}
        locale={ptBR}
        tileDisabled={({ date }) => {
          // Desabilita domingos (por exemplo)
          return date.getDay() === 0;
        }}
      />
    </div>
  );
}
