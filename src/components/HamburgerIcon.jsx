import PropTypes from "prop-types";
export function HamburgerIcon({ onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col space-y-1 cursor-pointer">
      <div className="w-6 h-1 bg-black"></div>
      <div className="w-6 h-1 bg-black"></div>
      <div className="w-6 h-1 bg-black"></div>
    </div>
  );
}

HamburgerIcon.propTypes = {
  onClick: PropTypes.any
}