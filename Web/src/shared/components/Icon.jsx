import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import CancelIcon from "@mui/icons-material/Close";

const iconMap = {
  edit: EditIcon,
  delete: DeleteIcon,
  save: SaveIcon,
  cancel: CancelIcon,
};

export default function Icon({ type, ...props }) {
  const IconComponent = iconMap[type] || null;
  return IconComponent ? <IconComponent {...props} /> : null;
}

Icon.propTypes = {
  type: PropTypes.oneOf(["edit", "delete", "save", "cancel"]).isRequired,
};
