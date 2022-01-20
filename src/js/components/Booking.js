import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import HourPicker from './HourPicker.js';

class Booking{
  constructor(element){
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element){
    const thisBooking = this;

    const generatedHtml = templates.bookingWidget();
    
    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHtml;

    thisBooking.dom.peopleAmount = document.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = document.querySelector(select.booking.hoursAmount);

    thisBooking.dom.hourPicker = document.querySelector(select.widgets.datePicker.wrapper);
    
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    console.log(thisBooking.dom.hourPicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
    
    // eslint-disable-next-line no-unused-vars
    thisBooking.dom.peopleAmount.addEventListener('click', function(event){
      console.log('click people');
    });
    // eslint-disable-next-line no-unused-vars
    thisBooking.dom.hoursAmount.addEventListener('click', function(event){
      console.log('click hours');
    });
  }
}

export default Booking;