import { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const subjects = [
  { id: 1, name: 'Build digital product' },
  { id: 2, name: 'Speed up development' },
  { id: 3, name: 'Optimize product usability' },
  { id: 4, name: 'Scale up team' },
  { id: 5, name: 'Others' },
];

const inputFields = [
  { id: 1, name: 'customerName', placeholder: 'Micale smith' },
  { id: 2, name: 'email', placeholder: 'Email*' },
  { id: 3, name: 'phone', placeholder: 'Phone (Optional)' },
  { id: 4, name: 'budget', placeholder: 'Budget' },
];

const Contact = () => {
  const [customerInfo, setCustomerInfo] = useState({});
  const handleBlur = (e) => {
    const field = e.target.name;
    const { value } = e.target;

    const newCustomerInfo = { ...customerInfo };
    newCustomerInfo[field] = value;
    setCustomerInfo(newCustomerInfo);
  };
  const handleSubmit = (e) => {
    console.log(customerInfo);

    const formField = document.getElementById('contactForm');
    formField.reset();

    e.preventDefault();
  };
  return (
    <section className="bg-info container mx-auto px-4 sm:px-0 ">
      <div className=" mx-3 sm:mx-10 md:mx-20  space-y-5 py-28">
        <p className="max-w-xl text-start text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
          What would you like to do?
        </p>

        <form onSubmit={handleSubmit} className="" id="contactForm">
          <div className="flex flex-wrap gap-5 max-w-2xl pt-8">
            {subjects &&
              subjects.map((subject) => (
                <Button
                  key={subject.id}
                  onBlur={handleBlur}
                  className=" text-white bg-sky-600 hover:bg-black"
                  name="subject"
                  value={subject.name}
                >
                  {subject.name}
                </Button>
              ))}
          </div>

          <div className="py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 ">
              {inputFields &&
                inputFields.map((field) => (
                  <Input key={field?.id} handleBlur={handleBlur} name={field?.name} placeholder={field?.placeholder} />
                ))}
            </div>

            <textarea
              onBlur={handleBlur}
              name="projectInfo"
              className="mt-7 h-64 w-full bg-white outline-none px-4 py-2.5 rounded text-xl sm:text-2xl font-medium focus:text-black focus:font-semibold"
              placeholder="Tell us about your project or the challenge you have*"
            />

            <div className="mt-14 flex justify-between">
              <p className="mt-3 text-lg " style={{ color: '#C9DEFC' }}>
                or contact us directly at <span className=" block font-medium text-xl leading-4">info@ewn-bd.com</span>
              </p>

              <button
                type="submit"
                className="px-16 py-6 bg-black text-white rounded font-semibold "
                style={{ boxShadow: '0px 20px 40px rgba(2, 6, 12, 0.15)' }}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
