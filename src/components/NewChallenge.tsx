import { useContext, useState } from "react";
import { TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import images from "../assets/images.tsx";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import Modal from "./Modal";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ChallengesContext } from "../store/hallenge-context.tsx";
//import {CHALL} from '../store/hallenge-context.tsx'; // type for inputs

type CHALL = {
  title: string;
  description: string;
  deadline: string;
};

const NewChallenge: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const {
    handleSubmit,
    control,
    formState: { errors,isValid },
  } = useForm<CHALL>({ mode: "onTouched",});
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  }>(null!);

  const contax = useContext(ChallengesContext);

  function handleSelectImage(image: { src: string; alt: string }) {
    setSelectedImage(image);
  }

  // console.log(contax)
  const onSubmit: SubmitHandler<CHALL> = (data) => {
    // console.log(selectedImage);
    // console.log(data);
    const challenge = {
      ...data,
      image: selectedImage,
    };
    console.log(challenge);

    contax.addChallenge(challenge);
    onDone();
  };

  //const { onChange, onBlur, name, ref } = register("image");
  return (
    //field	is object which constain onChange ,onBlur,value,disabled,name,ref
    // which can be use - example below
    <>
      <Modal title="New Challenge" onClose={onDone}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                />
              )}
            />
            {errors.title && (
              <Typography sx={{ color: "red" }} component="span">
                This is required
              </Typography>
            )}
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  //defaultValue="Default Value"
                />
              )}
            />
            {errors.description && (
              <Typography sx={{ color: "red" }} component="span">
                This is required
              </Typography>
            )}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
              <Controller
                name="deadline"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    label="Controlled picker"
                    value={value}
                    onChange={(newvalue) =>
                      onChange(dayjs(newvalue).format("DD/MM/YYYY"))
                    }
                  />
                )}
              />
            </LocalizationProvider>
            {errors.deadline && (
              <Typography sx={{ color: "red" }} component="span">
                This is required
              </Typography>
            )}
          </Stack>

          <ul id="new-challenge-images" style={{ marginTop: "10px" }}>
            {images.map((image: { src: string; alt: string }) => (
              <li
                key={image.alt}
                onClick={() => handleSelectImage(image)}
                className={selectedImage === image ? "selected" : undefined}
              >
                <img {...image} />
              </li>
            ))}
          </ul>
          <p className="new-challenge-actions">
            <button type="button" onClick={onDone}>
              Cancel
            </button>
            <button type="submit"  disabled={!isValid || selectedImage== null}>Add Challenge</button>
          </p>
        </form>
      </Modal>
    </>
  );
};

export default NewChallenge;
