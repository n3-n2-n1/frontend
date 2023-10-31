import { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Button from '#/components/button';
import { ISendSuccessProps } from './types';
import './styles.css';
import Navbar from '#/components/navbar';

const SendSuccessPage: FC<ISendSuccessProps> = ({ message }) => {
  return (
    <section className="bg-gray-100 items-center flex flex-col w-full">
      <Navbar />
      <div className="p-4">
        <div className="container mx-auto py-20 w-full">
          <div className="flex items-center justify-center my-14">
            <img
              src="src/assets/icon/success.svg"
              alt="data sent successful"
              className="object-cover rounded w-68 h-auto"
            />
          </div>
          <div className="flex items-center justify-center py-4">
            <h3 className="successfull">
              {message ?? '¡Datos enviados con éxito!'}
            </h3>
          </div>
              <h3 className="flex text-start text-base justify-center">
                Muchas gracias por fiscalizar, VLLC!
              </h3>
          <div className="flex items-center justify-center my-20">
            {/* TODO: Mover a Dashboard */}
            <div className="w-full mx-6">
              <Link to="/">
              <Button
                className="bg-violet-brand p-4 text-white rounded-xl font-semibold text-xl tracking-wider w-full cursor-default"
                type="submit"
                label="Volver a inicio"
                />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SendSuccess = observer(SendSuccessPage);

export default SendSuccess;
