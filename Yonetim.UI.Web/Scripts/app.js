﻿(function ($) {
    $.extend($.summernote.lang, {
        'tr-TR': {
            font: {
                bold: 'Kalın',
                italic: 'İtalik',
                underline: 'Altı çizili',
                strike: 'Üstü çizili',
                clear: 'Temizle',
                height: 'Satır yüksekliği',
                size: 'Yazı tipi boyutu'
            },
            image: {
                image: 'Resim',
                insert: 'Resim ekle',
                resizeFull: 'Orjinal boyut',
                resizeHalf: '1/2 boyut',
                resizeQuarter: '1/4 boyut',
                floatLeft: 'Sola hizala',
                floatRight: 'Sağa hizala',
                floatNone: 'Hizalamayı kaldır',
                dragImageHere: 'Buraya sürükleyin',
                selectFromFiles: 'Dosya seçin',
                url: 'Resim bağlantısı'
            },
            link: {
                link: 'Bağlantı',
                insert: 'Bağlantı ekle',
                unlink: 'Bağlantıyı kaldır',
                edit: 'Bağlantıyı düzenle',
                textToDisplay: 'Görüntülemek için',
                url: 'Bağlantı adresi?'
            },
            video: {
                video: 'Video',
                videoLink: 'Video bağlantısı',
                insert: 'Video ekle',
                url: 'Video bağlantısı?',
                providers: '(YouTube, Vimeo, Vine, Instagram veya DailyMotion)'
            },
            table: {
                table: 'Tablo'
            },
            hr: {
                insert: 'Yatay çizgi ekle'
            },
            style: {
                style: 'Biçim',
                normal: 'Normal',
                blockquote: 'Alıntı',
                pre: 'Önbiçimli',
                h1: 'Başlık 1',
                h2: 'Başlık 2',
                h3: 'Başlık 3',
                h4: 'Başlık 4',
                h5: 'Başlık 5',
                h6: 'Başlık 6'
            },
            lists: {
                unordered: 'Madde işaretli liste',
                ordered: 'Numaralı liste'
            },
            options: {
                help: 'Yardım',
                fullscreen: 'Tam ekran',
                codeview: 'HTML Kodu'
            },
            paragraph: {
                paragraph: 'Paragraf',
                outdent: 'Girintiyi artır',
                indent: 'Girintiyi azalt',
                left: 'Sola hizala',
                center: 'Ortaya hizala',
                right: 'Sağa hizala',
                justify: 'Yasla'
            },
            color: {
                recent: 'Son renk',
                more: 'Daha fazla renk',
                background: 'Arka plan rengi',
                foreground: 'Yazı rengi',
                transparent: 'Seffaflık',
                setTransparent: 'Şeffaflığı ayarla',
                reset: 'Sıfırla',
                resetToDefault: 'Varsayılanlara sıfırla'
            },
            shortcut: {
                shortcuts: 'Kısayollar',
                close: 'Kapat',
                textFormatting: 'Yazı biçimlendirme',
                action: 'Eylem',
                paragraphFormatting: 'Paragraf biçimlendirme',
                documentStyle: 'Biçim'
            },
            history: {
                undo: 'Geri al',
                redo: 'Yeniden yap'
            }
        }
    });
})(jQuery);

$("#tblkategori").DataTable({
    responsive: true,
    language: {
        "lengthMenu": "Bir sayfada _MENU_ Kayıt Görüntüle",
        "zeroRecords": "Aradığınız kriterde kayıt bulunamadı...",
        "info": "Gösterilen Sayfa _PAGE_ / _PAGES_",
        "infoEmpty": "Kayıt Bulunmamaktadır",
        "infoFiltered": "(Toplam _MAX_ kayıt aranıyor)",
        "search": "Arama",
        "Previous": "Önceki",
        "Next": "Sonraki",
        "paginate": {
            "first": "ilk",
            "last": "son",
            "next": "Sonraki",
            "previous": "Önceki"
        }
    }
});
$("#tblhaber").DataTable({
    responsive: true,
    language: {
        "lengthMenu": "Bir sayfada _MENU_ Kayıt Görüntüle",
        "zeroRecords": "Aradığınız kriterde kayıt bulunamadı...",
        "info": "Gösterilen Sayfa _PAGE_ / _PAGES_",
        "infoEmpty": "Kayıt Bulunmamaktadır",
        "infoFiltered": "(Toplam _MAX_ kayıt aranıyor)",
        "search": "Arama",
        "Previous": "Önceki",
        "Next": "Sonraki",
        "paginate": {
            "first": "ilk",
            "last": "son",
            "next": "Sonraki",
            "previous": "Önceki"
        }
    }
});
$("#Icerik").summernote({
    lang: 'tr-TR',
    height: 400,  
    codemirror: { 
        theme: 'monokai'
    }
}); 