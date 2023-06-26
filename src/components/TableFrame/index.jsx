import React from "react";
import PropTypes  from "prop-types";


export const TableFrame = ({titulo, calificacion, premios, duracion}) =>{
    return(
        <>
              <tbody>
				<tr>
					<td>{titulo}</td>
                    <td>{duracion}</td>
					<td>{calificacion}</td>
                    <td>{premios}</td>
				</tr>
			</tbody>

        </>
    )
}
TableFrame.propTypes = {
	titulo: PropTypes.string,
	calificacion: PropTypes.number,
	premios: PropTypes.number,
	duracion: PropTypes.number
}