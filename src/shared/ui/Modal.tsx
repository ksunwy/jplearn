import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/kit/dialog";
import { Button } from "@/shared/ui/kit/button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  open,
  onClose,
  title,
  description,
  actionLabel = "OK",
  onAction,
  children,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white border-4 border-yellow rounded-2xl shadow-2xl p-8 max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-yellow-700">
            {title}
          </DialogTitle>
        </DialogHeader>

        {description && <p className="mt-4 text-gray-800 font-medium">{description}</p>}
        {children}

        <Button
          onClick={onAction ?? onClose}
          className="mt-6 bg-yellow hover:bg-yellow-600 text-white font-bold rounded-xl shadow-md"
        >
          {actionLabel}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
