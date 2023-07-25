import Swal from "sweetalert2";

export function alertAutoDisappear(title: string, timer: number, html = "") {
    Swal.fire({
        title: title,
        html: html,
        timer: timer,
        timerProgressBar: true,
    });
}
