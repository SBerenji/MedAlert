import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ScheduleCard(props) {
  return (
    <Card className="mt-6 w-11/12  border-emerald border-2">
      <CardBody>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          {props.data.medicineName} tablet
        </Typography>
        <div className="flex flex-col items-start">
          <Typography color="black">
            Frequency: {props.data.frequency}
          </Typography>
          <Typography color="black">
            Doctor: {props.data.doctor}
          </Typography>
          <Typography color="black">
            Usage Period: From {props.data.usage.start} - To: {props.data.usage.end}
          </Typography>
        </div>
        <div className="flex gap-4">
          <Typography color="black">Time:</Typography>
          <Typography color="black">{props.data.time.first}</Typography>

          <CardFooter className="pt-0">
            <Button className=" bg-gray-400 text-black text-xl normal-case font-light" size='sm'>Edit</Button>
          </CardFooter>
        </div>
      </CardBody>
    </Card>
  );
}
