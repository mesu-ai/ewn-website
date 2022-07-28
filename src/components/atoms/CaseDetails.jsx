import Image from 'next/image';
import TickIcon from '../../assets/svgs/TickIcon';

const CaseDetails = ({
  infoTitle = '',
  description = '',
  caseImg = '',
  details = [],
  className = '',
  tickColor = '#1098FF',
}) => {
  return (
    <div className="grid grid-cols-2 py-10 gap-8 ">
      <div>
        <Image src={caseImg} alt="Case-Info" />
      </div>

      <div className={`my-auto ${className}`}>
        <p className="font-semibold text-3xl">{infoTitle}</p>
        <p className="font-normal text-base pt-4">{description}</p>

        {details &&
          details.map((item) => (
            <li key={item.id} className="list-none flex mt-3">
              <TickIcon className="mr-2 text-white" color={tickColor} />
              <p>{item.info}</p>
            </li>
          ))}
      </div>
    </div>
  );
};

export default CaseDetails;
