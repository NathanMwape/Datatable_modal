$(document).ready(function () {
  $(".data-table").DataTable({
    scrollCollapse: true,
    autoWidth: false,
    responsive: true,
    columnDefs: [
      {
        targets: "datatable-nosort",
        orderable: false,
      },
    ],
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "Tous"],
    ],
    language: {
      info: "_START_-_END_ de _TOTAL_ entrées",
      searchPlaceholder: "Recherche...",
      paginate: {
        next: '<ion-icon name="chevron-forward-outline"></ion-icon>',
        previous: '<ion-icon name="chevron-back-outline"></ion-icon>',
      },
    },
  });

  $(".data-table-export").each(function () {
    var table = $(this);
    var tableTitle = table.data("title");
    var fileName = table.data("filename");

    table.DataTable({
      scrollCollapse: true,
      autoWidth: false,
      responsive: true,
      dom: '<"top-toolbar d-flex justify-content-between"<"search-container"f><"length-menu-container"l><""B>>rtip',
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "Tous"],
      ],
      language: {
        info: "_START_-_END_ de _TOTAL_ entrées",
        searchPlaceholder: "Recherche...",
        paginate: {
          next: '<ion-icon name="chevron-forward-outline"></ion-icon>',
          previous: '<ion-icon name="chevron-back-outline"></ion-icon>',
        },
      },
      buttons: [
        {
          extend: "csv",
          title: tableTitle,
          filename: fileName,
          exportOptions: {
            columns: ":not(.no-export)",
          },
          className: "btn-sm",
        },
        {
          extend: "excel",
          title: tableTitle,
          filename: fileName,
          exportOptions: {
            columns: ":not(.no-export)",
          },
          className: "btn-sm",
        },
        {
          extend: "pdf",
          title: tableTitle,
          filename: fileName,
          exportOptions: {
            columns: ":not(.no-export)",
          },
          className: "btn-sm",
        },
      ],
    });
  });
});
