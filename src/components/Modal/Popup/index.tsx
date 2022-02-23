import { Popup, IndexBar, List } from "antd-mobile";
import { optionType } from "constant/formConfig";

interface IProps {
  visible: boolean;
  options: { label: string; value: string }[];
  handleClose: () => void;
  handlePicker: (v: any, optionType: optionType) => void;
  optionType: optionType;
}
function CustomPopup({
  visible,
  options,
  optionType,
  handleClose,
  handlePicker,
}: IProps) {
  const charCodeOfA = "A".charCodeAt(0);
  const groups = Array(26)
    .fill("")
    .map((_, i) => ({
      title: String.fromCharCode(charCodeOfA + i),
      items: options.filter((v) =>
        v.value.startsWith(String.fromCharCode(charCodeOfA + i))
      ),
    }));
  return (
    <Popup
      visible={visible}
      onMaskClick={handleClose}
      bodyStyle={{ height: "80vh" }}
    >
      {optionType === "country" ? (
        <IndexBar sticky={false}>
          {groups.map((item) => {
            const { title, items } = item;
            return (
              <IndexBar.Panel index={title} key={title}>
                <List>
                  {items.map((item, index) => (
                    <List.Item
                      arrow={false}
                      key={index}
                      onClick={() => {
                        handlePicker(item, optionType);
                      }}
                    >
                      {item.label}
                    </List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            );
          })}
        </IndexBar>
      ) : (
        <List>
          {options.map((item, index) => (
            <List.Item
              arrow={false}
              key={index}
              onClick={() => {
                handlePicker(item, optionType);
              }}
            >
              {item.label}
            </List.Item>
          ))}
        </List>
      )}
    </Popup>
  );
}

export default CustomPopup;
