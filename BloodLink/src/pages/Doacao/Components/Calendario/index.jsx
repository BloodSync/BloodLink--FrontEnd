import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';
import { ptBR } from 'date-fns/locale';

export default function Calendario({ onSelectDate }) {
  const [value, setValue] = useState(new Date());

  const handleChange = (date) => {
    // Ignora domingos (0)
    if (date.getDay() === 0) return;

    setValue(date);
    onSelectDate(date);
  };

  return (
    <div className="calendario-container">
      <Calendar
        onChange={handleChange}
        value={value}
        locale={ptBR}
      />
    </div>
  );
}
