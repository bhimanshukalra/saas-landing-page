import clsx from "clsx";
import { ReactNode } from "react";
import { Marker } from ".";

type ButtonProps = {
  icon: string;
  children: ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
};

export function Button({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}: ButtonProps) {
  return href ? (
    <a className={clsx(getPrimaryStyle(), containerClassName)} href={href}>
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(getPrimaryStyle(), containerClassName)}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
  function getPrimaryStyle() {
    return "relative p-0.5 g5 rounded-2xl shadow-500 group";
  }

  function Inner() {
    return (
      <>
        <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
          <span className="absolute -left-[1px]">
            <Marker fill={markerFill} />
          </span>
          {icon && (
            <img
              src={icon}
              alt="circle"
              className="size-10 mr-5 object-contain z-10"
            />
          )}
          <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
            {children}
          </span>
        </span>
        <span className="glow-before glow-after" />
      </>
    );
  }
}
