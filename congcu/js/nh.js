const DHAMMAPADA = [
  {t:"\"Ý dẫn đầu các pháp,<br>        Ý làm chủ, ý tạo;<br>        Nếu với ý ô nhiễm,<br>        Nói lên hay hành động,<br>        Khổ não bước theo sau,<br>        Như xe, chân vật kéo \"."},
  {t:"\"Ý dẫn đầu các pháp,<br>        Ý làm chủ, ý tạo,<br>        Nếu với ý thanh tịnh,<br>        Nói lên hay hành động,<br>        An lạc bước theo sau,<br>        Như bóng, không rời hình \"."},
  {t:"\"Nó mắng tôi, đánh tôi,<br>        Nó thắng tôi, cướp tôi \"<br>        Ai ôm hiềm hận ấy,<br>        Hận thù không thể nguôi."},
  {t:"\"Nó mắng tôi, đánh tôi,<br>        Nó thắng tôi, cướp tôi, \"<br>        Không ôm hiềm hận ấy,<br>        Hận thù được tự nguôi."},
  {t:"\"Với hận diệt hận thù,<br>        Ðời này không có được.<br>        Không hận diệt hận thù,<br>        Là định luật ngàn thu \"."},
  {t:"\"Người khác không hiểu biết,<br>        Chúng ta đây bị hại.<br>        Chỗ ấy, ai biết được<br>        Tranh luận được lắng êm.\""},
  {t:"\"Ai sống nhìn tịnh tướng,<br>        không hộ trì các căn,<br>        ăn uống thiếu tiết độ,<br>        biếng nhác, chẳng tinh cần.<br>        Ma uy hiếp kẻ ấy,<br>        như cây yếu trước gió \"."},
  {t:"\"Ai sống quán bất tịnh,<br>        Khéo hộ trì các căn,<br>        ăn uống có tiết độ,<br>        có lòng tin, tinh cần,<br>        Ma không uy hiếp được,<br>        Như núi đá, trước gió\""},
  {t:"\"Ai mặc áo cà sa,<br>        tâm chưa rời uế trược,<br>        không tự chế, không thực,<br>        không xứng áo cà sa \"."},
  {t:"\"Ai rời bỏ uế trược,<br>        giới luật khéo nghiêm trì,<br>        tự chế, sống chơn thực,<br>        thật xứng áo cà sa.\""},
  {t:"\"Không chân, tưởng chân thật,<br>        Chân thật, thấy không chân<br>        Họ không đạt chân thật<br>        Do tà tư tà hạnh"},
  {t:"\"Chân thật, biết chân thật,<br>        Không chân, biết không chân.<br>        Chúng đạt được chân thật,<br>        do chánh tư, chánh hạnh.\""},
  {t:"\"Như ngôi nhà vụng lợp,<br>        Mưa liền xâm nhập vào.<br>        Cũng vậy tâm không tu,<br>        Tham dục liền xâm nhập.\""},
  {t:"\"Như ngôi nhà khéo lợp,<br>        Mưa không xâm nhập vào.<br>        Cũng vậy tâm khéo tu,<br>        Tham dục không xâm nhập.\""},
  {t:"\"Nay sầu, đời sau sầu,<br>        Kẻ ác, hai đời sầu;<br>        Nó sầu, nó ưu não,<br>        Thấy nghiệp uế mình làm.\""},
  {t:"\"Nay vui, đời sau vui,<br>        Làm phước, hai đời vui.<br>        Người ấý vui, an vui,<br>        Thấy nghiệp tịnh mình làm.\""},
  {t:"\"Nay than, đời sau than,<br>        Kẻ ác, hai đời than,<br>        than rằng: \"Ta làm ác \"<br>        Ðọa cõi dữ, than hơn.\""},
  {t:"\"Nay sướng, đời sau sướng,<br>        Làm phước, hai đời sướng.<br>        Mừng rằng: \"Ta làm thiện \",<br>        Sanh cõi lành, sướng hơn.\""},
  {t:"\"Nếu người nói nhiều kinh,<br>        Không hành trì, phóng dật;<br>        Như kẻ chăn bò người,<br>        Không phần Sa môn hạnh.\""},
  {t:"\"Dầu nói ít kinh điển,<br>        Nhưng hành pháp, tùy pháp,<br>        Từ bỏ tham, sân, si,<br>        Tỉnh giác, tâm giải thoát,<br>        Không chấp thủ hai đời,<br>        Dự phần Sa môn hạnh.\""},
  {t:"\"Không phóng dật, đường sống,<br>        Phóng dật là đường chết.<br>        Không phóng dật, không chết,<br>        Phóng dật như chết rồi.\""},
  {t:"\"Biết rõ sai biệt ấy,<br>        Người trí không phóng dật,<br>        Hoan hỷ, không phóng dật,<br>        An vui hạnh bậc Thánh.\""},
  {t:"\"Người hằng tu thiền định,<br>        Thường kiên trì tinh tấn.<br>        Bậc trí hưởng Niết Bàn,<br>        Ách an tịnh vô thượng.\""},
  {t:"\"Nỗ lực, giữ chánh niệm,<br>        Tịnh hạnh, hành thận trọng<br>        Tự điều, sống theo pháp,<br>        Ai sống không phóng dật,<br>        Tiếng lành ngày tăng trưởng.\""},
  {t:"\"Nỗ lực, không phóng dật,<br>        Tự điều, khéo chế ngự.<br>        Bậc trí xây hòn đảo,<br>        Nước lụt khó ngập tràn.\""},
  {t:"\"Họ ngu si thiếu trí,<br>        Chuyên sống đời phóng dật.<br>        Người trí, không phóng dật,<br>        Như giữ tài sản quý.\""},
  {t:"\"Chớ sống đời phóng dật,<br>        Chớ mê say dục lạc.<br>        Không phóng dật, thiền định,<br>        Ðạt được an lạc lớn.\""},
  {t:"\"Người trí dẹp phóng dật,<br>        Với hạnh không phóng dật,<br>        Leo lầu cao trí tuệ,<br>        Không sầu, nhìn khổ sầu,<br>        Bậc trí đứng núi cao,<br>        Nhìn kẻ ngu, đất bằng.\""},
  {t:"\"Tinh cần giữa phóng dật,<br>        Tỉnh thức giữa quần mê.<br>        Người trí như ngựa phi,<br>        Bỏ sau con ngựa hèn.\""},
  {t:"\"Ðế Thích không phóng dật,<br>        Ðạt ngôi vị Thiên chủ.<br>        Không phóng dật, được khen;<br>        Phóng dật, thường bị trách.\""},
  {t:"\"Vui thích không phóng dật,<br>        Tỷ kheo sợ phóng dật,<br>        Bước tới như lửa hừng,<br>        Thiêu kiết sử lớn nhỏ.\""},
  {t:"\"Vui thích không phóng dật,<br>        Tỷ kheo sợ phóng dật,<br>        Không thể bị thối đọa,<br>        Nhất định gần Niết Bàn.\""},
  {t:"\"Tâm hoảng hốt giao động,<br>        Khó hộ trì, khó nhiếp,<br>        Người trí làm tâm thẳng,<br>        Như thợ tên, làm tên.\""},
  {t:"\"Như cá quăng trên bờ,<br>        Vất ra ngoài thủy giới;<br>        Tâm này vũng vẫy mạnh,<br>        Hãy đoạn thế lực Ma.\""},
  {t:"\"Khó nắm giữ, khinh động,<br>        Theo các dục quay cuồng.<br>        Lành thay, điều phục tâm;<br>        Tâm điều, an lạc đến.\""},
  {t:"\"Tâm khó thấy, tế nhị,<br>        Theo các dục quay cuồng.<br>        Người trí phòng hộ tâm,<br>        Tâm hộ, an lạc đến.\""},
  {t:"\"Chạy xa, sống một mình,<br>        Không thân, ẩn hang sâu<br>        Ai điều phục được tâm,<br>        Thoát khỏi Ma trói buộc\""},
  {t:"\"Ai tâm không an trú,<br>        Không biết chân diệu pháp,<br>        Tịnh tín bị rúng động,<br>        Trí tuệ không viên thành.\""},
  {t:"\"Tâm không đầy tràn dục,<br>        Tâm không (hận) công phá,<br>        Ðoạn tuyệt mọi thiện ác,<br>        Kẻ tỉnh không sợ hãi,\""},
  {t:"\"Biết thân như đồ gốm,<br>        Trú tâm như thành trì,<br>        Chống ma với gươm trí;<br>        Giữ chiến thắng không tham\""},
  {t:"\"Không bao lâu thân này,<br>        Sẽ nằm dài trên đất,<br>        Bị vất bỏ, vô thức,<br>        Như khúc cây vô dụng.\""},
  {t:"\"Kẻ thù hại kẻ thù,<br>        Oan gia hại oan gia,<br>        Không bằng tâm hướng tà,<br>        Gây ác cho tự thân.\""},
  {t:"\"Ðiều mẹ cha bà con,<br>        Không có thể làm được<br>        Tâm hướng chánh làm được<br>        Làm được tốt đẹp hơn.\""},
  {t:"\"Ai chinh phục đất này<br>        Dạ ma, Thiên giới này?<br>        Ai khéo giảng Pháp cú,<br>        Như người khéo hái hoa?\""},
  {t:"\"Hữu học chinh phục đất,<br>        Dạ ma, Thiên giới này.<br>        Hữu học giảng Pháp cú,<br>        Như người khéo hái hoa.\""},
  {t:"\"Biết thân như bọt nước,<br>        Ngộ thân là như huyễn,<br>        Bẻ tên hoa của ma,<br>        Vượt tầm mắt thần chết.\""},
  {t:"\"Người nhặt các loại hoa,<br>        Ý đắm say, tham nhiễm,<br>        Bị thần chết mang đi,<br>        Như lụt trôi làng ngủ.\""},
  {t:"\"Người nhặt các loại hoa,<br>        Ý đắm say tham nhiễm,<br>        Các dục chưa thỏa mãn,<br>        Ðã bị chết chinh phục.\""},
  {t:"\"Như ong đến với hoa,<br>        Không hại sắc và hương,<br>        Che chở hoa, lấy nhụy.<br>        Bậc Thánh đi vào làng \"."},
  {t:"\"Không nên nhìn lỗi người,<br>        Người làm hay không làm.<br>        Nên nhìn tự chính mình.<br>        Có làm hay không làm.\""},
  {t:"\"Như bông hoa tươi đẹp,<br>        Có sắc nhưng không hương.<br>        Cũng vậy, lời khéo nói,<br>        Không làm, không kết quả.\""},
  {t:"\"Như bông hoa tươi đẹp,<br>        Có sắc lại thêm hương;<br>        Cũng vậy, lời khéo nói,<br>        Có làm, có kết quả.\""},
  {t:"\"Như từ một đống hoa,<br>        Nhiều tràng hoa được làm.<br>        Cũng vậy, thân sanh tử,<br>        Phải làm nhiều việc lành.\""},
  {t:"\"Hương các loại hoa thơm<br>        Không ngược bay chiều gió<br>        Nhưng hương người đức hạnh<br>        Ngược gió khắp tung bay<br>        Chỉ có bậc chân nhân<br>        Tỏa khắp mọi phương trời.\""},
  {t:"\"Hoa chiên đàn, già la,<br>        Hoa sen, hoa vũ quý,<br>        Giữa những hương hoa ấy,<br>        Giới hương là vô thượng.\""},
  {t:"\"Ít giá trị hương này,<br>        Hương già la, chiên đàn;<br>        Chỉ hương người đức hạnh,<br>        Tối thượng tỏa Thiên giới.\""},
  {t:"\"Nhưng ai có giới hạnh,<br>        An trú không phóng dật,<br>        Chánh trí, chơn giải thoát,<br>        Ác ma không thấy đường.\""},
  {t:"\"Như giữa đống rác nhớp,<br>        Quăng bỏ trên đường lớn,<br>        Chỗ ấy hoa sen nở,<br>        Thơm sạch, đẹp ý người.\""},
  {t:"\"Cũng vậy giữa quần sanh,<br>        Uế nhiễm, mù, phàm tục,<br>        Ðệ tử bậc Chánh Giác,<br>        Sáng ngời với Tuệ Trí.\""},
  {t:"\"Ðêm dài cho kẻ thức,<br>        Ðường dài cho kẻ mệt,<br>        Luân hồi dài, kẻ ngu,<br>        Không biết chơn diệu pháp.\""},
  {t:"\"Tìm không được bạn đường,<br>        Hơn mình hay bằng mình,<br>        Thà quyết sống một mình,<br>        Không bè bạn kẻ ngu.\""},
  {t:"\"Con tôi, tài sản tôi,<br>        Người ngu sanh ưu não,<br>        Tự ta, ta không có,<br>        Con đâu, tài sản đâu.\""},
  {t:"\"Người ngu nghĩ mình ngu,<br>        Nhờ vậy thành có trí.<br>        Người ngu tưởng có trí,<br>        Thật xứng gọi chí ngu.\""},
  {t:"\"Người ngu, dầu trọn đời,<br>        Thân cận người có trí,<br>        Không biết được Chánh pháp,<br>        Như muỗng với vị canh.\""},
  {t:"\"Người trí, dầu một khắc,<br>        Thân cận người có trí,<br>        Biết ngay chân diệu pháp,<br>        Như lưỡi với vị canh.\""},
  {t:"\"Người ngu si thiếu trí,<br>        Tự ngã thành kẻ thù.<br>        Làm các nghiệp không thiện,<br>        Phải chịu quả đắng cay.\""},
  {t:"\"Nghiệp làm không chánh thiện,<br>        Làm rồi sanh ăn năn,<br>        Mặt nhuốm lệ, khóc than,<br>        Lãnh chịu quả dị thục.\""},
  {t:"\"Và nghiệp làm chánh thiện,<br>        Làm rồi không ăn năn,<br>        Hoan hỷ, ý đẹp lòng,<br>        Hưởng thọ quả dị thục.\""},
  {t:"\"Người ngu nghĩ là ngọt,<br>        Khi ác chưa chín muồi;<br>        Ác nghiệp chín muồi rồi,<br>        Người ngu chịu khổ đau.\""},
  {t:"\"Tháng tháng với ngọn cỏ,<br>        Người ngu có ăn uống<br>        Không bằng phần mười sáu<br>        Người hiểu pháp hữu vi.\""},
  {t:"\"Nghiệp ác đã được làm,<br>        Như sữa, không đông ngay,<br>        Cháy ngầm theo kẻ ngu,<br>        Như lửa tro che đậy.\""},
  {t:"\"Tự nó chịu bất hạnh,<br>        Khi danh đến kẻ ngu.<br>        Vận may bị tổn hại,<br>        Ðầu nó bị nát tan.\""},
  {t:"\"Ưa danh không tương xứng,<br>        Muốn ngồi trước tỷ kheo,<br>        Ưa quyền tại tịnh xá,<br>        Muốn mọi người lễ kính.\""},
  {t:"\"Mong cả hai tăng, tục,<br>        Nghĩ rằng (chính ta làm).<br>        Trong mọi việc lớn nhỏ,<br>        Phải theo mệnh lệnh ta \"<br>        Người ngu nghĩ như vậy<br>        Dục và mạn tăng trưởng."},
  {t:"\"Khác thay duyên thế lợi,<br>        Khác thay đường Niết Bàn.<br>        Tỷ kheo, đệ tử Phật,<br>        Hãy như vậy thắng tri.<br>        Chớ ưa thích cung kính,<br>        Hãy tu hạnh viễn ly.\""},
  {t:"\"Nếu thấy bậc hiền trí,<br>        Chỉ lỗi và khiển trách,<br>        Như chỉ chỗ chôn vàng<br>        Hãy thân cận người trí!<br>        Thân cận người như vậy,<br>        Chỉ tốt hơn, không xấu.\""},
  {t:"\"Những người hay khuyên dạy,<br>        Ngăn người khác làm ác,<br>        Ðược người hiền kính yêu,<br>        Bị người ác không thích.\""},
  {t:"\"Chớ thân với bạn ác,<br>        Chớ thân kẻ tiểu nhân.<br>        Hãy thân người bạn lành,<br>        Hãy thân bậc thượng nhân.\""},
  {t:"\"Pháp hỷ đem an lạc,<br>        Với tâm tư thuần tịnh;<br>        Người trí thường hoan hỷ,<br>        Với pháp bậc Thánh thuyết.\""},
  {t:"\"Người trị thủy dẫn nước,<br>        Kẻ làm tên nắn tên,<br>        Người thợ mộc uốn gỗ,<br>        Bậc trí nhiếp tự thân.\""},
  {t:"\"Như đá tảng kiên cố,<br>        Không gió nào giao động,<br>        Cũng vậy, giữa khen chê,<br>        Người trí không giao động.\""},
  {t:"\"Như hồ nước sâu thẳm,<br>        Trong sáng, không khuấy đục,<br>        Cũng vậy, nghe chánh pháp,<br>        Người trí hưởng tịnh lạc.\""},
  {t:"\"Người hiền bỏ tất cả,<br>        Người lành không bàn dục,<br>        Dầu cảm thọ lạc khổ,<br>        Bậc trí không vui buồn.\""},
  {t:"\"Không vì mình, vì người.<br>        Không cầu được con cái,<br>        Không tài sản quốc độ,<br>        Không cầu mình thành tựu,<br>        Với việc làm phi pháp.<br>        Vị ấy thật trì giới,<br>        Có trí tuệ, đúng pháp.\""},
  {t:"\"Ít người giữa nhân loại,<br>        Ðến được bờ bên kia<br>        Còn số người còn lại,<br>        Xuôi ngược chạy bờ này.\""},
  {t:"\"Những ai hành trì pháp,<br>        Theo chánh pháp khéo dạy,<br>        Sẽ đến bờ bên kia,<br>        Vượt ma lực khó thoát.\""},
  {t:"\"Kẻ trí bỏ pháp đen,<br>        Tu tập theo pháp trắng.<br>        Bỏ nhà, sống không nhà,<br>        Sống viễn ly khổ lạc.\""},
  {t:"\"Hãy cầu vui Niết Bàn,<br>        Bỏ dục, không sở hữu,<br>        Kẻ trí tự rửa sạch,<br>        Cấu uế từ nội tâm.\""},
  {t:"\"Những ai với chánh tâm,<br>        Khéo tu tập giác chi,<br>        Từ bỏ mọi ái nhiễm,<br>        Hoan hỷ không chấp thủ.<br>        Không lậu hoặc, sáng chói,<br>        Sống tịch tịnh ở đời.\""},
  {t:"\"Ðích đã đến, không sầu,<br>        Giải thoát ngoài tất cả,<br>        Ðoạn trừ mọi buộc ràng,<br>        Vị ấy không nhiệt não.\""},
  {t:"\"Tự sách tấn, chánh niệm,<br>        Không thích cư xá nào,<br>        Như ngỗng trời rời ao,<br>        Bỏ sau mọi trú ẩn.\""},
  {t:"\"Tài sản không chất chứa,<br>        Ăn uống biết liễu tri,<br>        Tự tại trong hành xứ,<br>        \"Không vô tướng, giải thoát, \"<br>        Như chim giữa hư không,<br>        Hướng chúng đi khó tìm.\""},
  {t:"\"Ai lậu hoặc đoạn sạch,<br>        Ăn uống không tham đắm,<br>        Tự tại trong hành xứ,<br>        \"Không, vô tướng giải thoát. \"<br>        Như chim giữa hư không,<br>        Dấu chân thật khó tìm. \""},
  {t:"\"Ai nhiếp phục các căn,<br>        Như đánh xe điều ngự,<br>        Mạn trừ, lậu hoặc dứt,<br>        Người vậy, Chư Thiên mến.\""},
  {t:"\"Như đất, không hiềm hận,<br>        Như cột trụ, kiên trì,<br>        Như hồ, không bùn nhơ,<br>        Không luân hồi, vị ấy.\""},
  {t:"\"Người tâm ý an tịnh,<br>        Lời an, nghiệp cũng an,<br>        Chánh trí, chơn giải thoát,<br>        Tịnh lạc là vị ấy.\""},
  {t:"\"Không tin, hiểu vô vi.<br>        Người cắt mọi hệ lụy<br>        Cơ hội tận, xả ly<br>        Vị ấy thật tối thượng.\""},
  {t:"\"Làng mạc hay rừng núi<br>        Thung lũng hay đồi cao,<br>        La Hán trú chỗ nào,<br>        Ðất ấy thật khả ái \"."},
  {t:"\"Khả ái thay núi rừng,<br>        Chỗ người phàm không ưa,<br>        Vị ly tham ưa thích,<br>        Vì không tìm dục lạc.\""},
  {t:"\"Dầu nói ngàn ngàn lời,<br>        Nhưng không gì lợi ích,<br>        Tốt hơn một câu nghĩa,<br>        Nghe xong, được tịnh lạc.\""},
  {t:"\"Dầu nói ngàn câu kệ<br>        Nhưng không gì lợi ích,<br>        Tốt hơn nói một câu,<br>        Nghe xong, được tịnh lạc.\""},
  {t:"\"Dầu nói trăm câu kệ<br>        Nhưng không gì lợi ích,<br>        Tốt hơn một câu pháp,<br>        Nghe xong, được tịnh lạc.\""},
  {t:"\"Dầu tại bãi chiến trường<br>        Thắng ngàn ngàn quân địch,<br>        Tự thắng mình tốt hơn,<br>        Thật chiến thắng tối thượng.\""},
  {t:"\"Tự thắng, tốt đẹp hơn,<br>        Hơn chiến thắng người khác.<br>        Người khéo điều phục mình,<br>        Thường sống tự chế ngự.\""},
  {t:"\"Dầu Thiên Thần, Thát Bà,<br>        Dầu Ma vương, Phạm Thiên<br>        Không ai chiến thắng nổi,<br>        Người tự thắng như vậy.\""},
  {t:"\"Tháng tháng bỏ ngàn vàng,<br>        Tế tự cả trăm năm,<br>        Chẳng bằng trong giây lát,<br>        Cúng dường bậc tự tu.<br>        Cùng dường vậy tốt hơn,<br>        Hơn trăm năm tế tự.\""},
  {t:"\"Dầu trải một trăm năm,<br>        Thờ lửa tại rừng sâu,<br>        Chẳng bằng trong giây lát,<br>        Cúng dường bậc tự tu.<br>        Cúng dường vậy tốt hơn,<br>        Hơn trăm năm tế tự.\""},
  {t:"\"Suốt năm cúng tế vật,<br>        Ðể cầu phước ở đời.<br>        Không bằng một phần tư<br>        Kính lễ bậc chánh trực.\""},
  {t:"\"Thường tôn trọng, kính lễ<br>        Bậc kỳ lão trưởng thượng,<br>        Bốn pháp được tăng trưởng:<br>        Thọ, sắc, lạc, sức mạnh.\""},
  {t:"\"Dầu sống một trăm năm<br>        Ác giới, không thiền định,<br>        Tốt hơn sống một ngày,<br>        Trì giới, tu thiền định.\""},
  {t:"\"Ai sống một trăm năm,<br>        Ác tuệ, không thiền định.<br>        Tốt hơn sống một ngày,<br>        Có tuệ, tu thiền định.\""},
  {t:"\"Ai sống một trăm năm,<br>        Lười nhác không tinh tấn,<br>        Tốt hơn sống một ngày<br>        Tinh tấn tận sức mình.\""},
  {t:"\"Ai sống một trăm năm,<br>        Không thấy pháp sinh diệt,<br>        Tốt hơn sống một ngày,<br>        Thấy được pháp sinh diệt.\""},
  {t:"\"Ai sống một trăm năm,<br>        Không thấy câu bất tử,<br>        Tốt hơn sống một ngày,<br>        Thấy được câu bất tử.\""},
  {t:"\"Ai sống một trăm năm,<br>        Không thấy pháp tối thượng,<br>        Tốt hơn sống một ngày,<br>        Thấy được pháp tối thượng.\""},
  {t:"\"Hãy gấp làm điều lành,<br>        Ngăn tâm làm điều ác.<br>        Ai chậm làm việc lành,<br>        Ý ưa thích việc ác.\""},
  {t:"\"Nếu người làm điều ác,<br>        Chớ tiếp tục làm thêm.<br>        Chớ ước muốn điều ác,<br>        Chứa ác, tất chịu khổ.\""},
  {t:"\"Nếu người làm điều thiện,<br>        Nên tiếp tục làm thêm.<br>        Hãy ước muốn điều thiện,<br>        Chứa thiện, được an lạc.\""},
  {t:"\"Người ác thấy là hiền.<br>        Khi ác chưa chín muồi,<br>        Khi ác nghiệp chín muồi,<br>        Người ác mới thấy ác.\""},
  {t:"\"Người hiền thấy là ác,<br>        Khi thiện chưa chín muồi.<br>        Khi thiện được chín muồi,<br>        Người hiền thấy là thiện.\""},
  {t:"\"Chớ chê khinh điều ác,<br>        Cho rằng \"chưa đến mình \",<br>        Như nước nhỏ từng giọt,<br>        Rồi bình cũng đầy tràn.<br>        Người ngu chứa đầy ác<br>        Do chất chứa dần dần.\""},
  {t:"\"Chớ chê khinh điều thiện<br>        Cho rằng \"Chưa đến mình, \"<br>        Như nước nhỏ từng giọt,<br>        Rồi bình cũng đầy tràn.<br>        Người trí chứa đầy thiện,<br>        Do chất chứa dần dần.\""},
  {t:"\"Ít bạn đường, nhiều tiền,<br>        Người buôn tránh đường hiểm.<br>        Muốn sống, tránh thuốc độc,<br>        Hãy tránh ác như vậy.\""},
  {t:"\"Bàn tay không thương tích,<br>        Có thể cầm thuốc độc.<br>        Không thương tích, tránh độc,<br>        Không làm, không có ác.\""},
  {t:"\"Hại người không ác tâm,<br>        Người thanh tịnh, không uế,<br>        Tội ác đến kẻ ngu,<br>        Như ngược gió tung bụi.\""},
  {t:"\"Một số sinh bào thai,<br>        Kẻ ác sinh địa ngục,<br>        Người thiện lên cõi trời,<br>        Vô lậu chứng Niết Bàn.\""},
  {t:"\"Không trên trời, giữa biển,<br>        Không lánh vào động núi,<br>        Không chỗ nào trên đời,<br>        Trốn được quả ác nghiệp.\""},
  {t:"\"Không trên trời, giữa biển,<br>        Không lánh vào động núi,<br>        Không chỗ nào trên đời,<br>        Trốn khỏi tay thần chết.\""},
  {t:"\"Mọi người sợ hình phạt,<br>        Mọi người sợ tử vong.<br>        Lấy mình làm ví dụ<br>        Không giết, không bảo giết.\""},
  {t:"\"Mọi người sợ hình phạt,<br>        Mọi người thích sống còn;<br>        Lấy mình làm ví dụ,<br>        Không giết, không bảo giết.\""},
  {t:"\"Chúng sanh cầu an lạc,<br>        Ai dùng trượng hại người,<br>        Ðể tìm lạc cho mình,<br>        Ðời sau không được lạc.\""},
  {t:"\"Chúng sanh cầu an lạc,<br>        Không dùng trượng hại người,<br>        Ðể tìm lạc cho mình,<br>        Ðời sau được hưởng lạc.\""},
  {t:"\"Chớ nói lời ác độc,<br>        Nói ác, bị nói lại,<br>        Khổ thay lời phẫn nộ,<br>        Ðao trượng phản chạm mình.\""},
  {t:"\"Nếu tự mình yên lặng,<br>        Như chiếc chuông bị bể.<br>        Ngươi đã chứng Niết Bàn<br>        Ngươi không còn phẫn nộ.\""},
  {t:"\"Với gậy người chăn bò,<br>        Lùa bò ra bãi cỏ;<br>        Cũng vậy, già và chết,<br>        Lùa người đến mạng chung.\""},
  {t:"\"Người ngu làm điều ác,<br>        Không ý thức việc làm.<br>        Do tự nghiệp, người ngu<br>        Bị nung nấu, như lửa.\""},
  {t:"\"Dùng trượng phạt không trượng,<br>        Làm ác người không ác.<br>        Trong mười loại khổ đau,<br>        Chịu gấp một loại khổ.\""},
  {t:"\"Hoặc khổ thọ khốc liệt,<br>        Thân thể bị thương vong,<br>        Hoặc thọ bệnh kịch liệt,<br>        Hay loạn ý tán tâm.\""},
  {t:"\"Hoặc tai họa từ vua,<br>        Hay bị vu trọng tội;<br>        Bà con phải ly tán,<br>        Tài sản bị nát tan.\""},
  {t:"\"Hoặc phòng ốc nhà cửa<br>        Bị hỏa tai thiêu đốt.<br>        Khi thân hoại mạng chung,<br>        Ác tuệ sanh địa ngục.\""},
  {t:"\"Không phải sống lõa thể<br>        Bện tóc, tro trét mình,<br>        Tuyệt thực, lăn trên đất,<br>        Sống nhớp, siêng ngồi xổm,<br>        Làm con người được sạch,<br>        Nếu không trừ nghi hoặc.\""},
  {t:"\"Ai sống tự trang sức,<br>        Nhưng an tịnh, nhiếp phục,<br>        Sống kiên trì, phạm hạnh,<br>        Không hại mọi sinh linh,<br>        Vị ấy là phạm chí,<br>        Hay sa môn, khất sĩ.\""},
  {t:"\"Thật khó tìm ở đời,<br>        Người biết thẹn, tự chế,<br>        Biết tránh né chỉ trích<br>        Như ngựa hiền tránh roi.\""},
  {t:"\"Như ngựa hiền chạm roi,<br>        Hãy nhiệt tâm, hăng hái,<br>        Với tín, giới, tinh tấn,<br>        Thiền định cùng trạch pháp.<br>        Minh hạnh đủ, chánh niệm,<br>        Ðoạn khổ này vô lượng.\""},
  {t:"\"Người trị thủy dẫn nước,<br>        Kẻ làm tên nắn tên,<br>        Người thợ mộc uốn ván,<br>        Bậc tự điều, điều thân.\""},
  {t:"\"Cười gì, hân hoan gì,<br>        Khi đời mãi bị thiêu?<br>        Bị tối tăm bao trùm,<br>        Sao không tìm ngọn đèn?\""},
  {t:"\"Hãy xem bong bóng đẹp,<br>        Chỗ chất chứa vết thương,<br>        Bệnh hoạn nhiều suy tư,<br>        Thật không gì trường cửu.\""},
  {t:"\"Sắc này bị suy già,<br>        Ổ tật bệnh, mỏng manh,<br>        Nhóm bất tịnh, đỗ vỡ,<br>        Chết chấm dứt mạng sống.\""},
  {t:"\"Như trái bầu mùa thu,<br>        Bị vất bỏ quăng đi,<br>        Nhóm xương trắng bồ câu,<br>        Thấy chúng còn vui gì?\""},
  {t:"\"Thành này làm bằng xương,<br>        Quét tô bằng thịt máu,<br>        Ở đây già và chết,<br>        Mạn, lừa đảo chất chứa.\""},
  {t:"\"Xe vua đẹp cũng già.<br>        Thân này rồi sẽ già,<br>        Pháp bậc thiện, không già.<br>        Như vậy bậc chí thiện<br>        Nói lên cho bậc thiện.\""},
  {t:"\"Người ít nghe kém học,<br>        Lớn già như trâu đực.<br>        Thịt nó tuy lớn lên,<br>        Nhưng tuệ không tăng trưởng.\""},
  {t:"\"Lang thang bao kiếp sống<br>        Ta tìm nhưng chẳng gặp,<br>        Người xây dựng nhà này,<br>        Khổ thay, phải tái sanh.\""},
  {t:"\"Ôi! Người làm nhà kia<br>        Nay ta đã thấy ngươi!<br>        Ngươi không làm nhà nữa.<br>        Ðòn tay ngươi bị gẫy,<br>        Kèo cột ngươi bị tan<br>        Tâm ta đạt tịch diệt,<br>        Tham ái thảy tiêu vong.\""},
  {t:"\"Lúc trẻ, không phạm hạnh,<br>        Không tìm kiếm bạc tiền.<br>        Như cò già bên ao,<br>        Ủ rũ, không tôm cá.\""},
  {t:"\"Lúc trẻ không phạm hạnh,<br>        Không tìm kiếm bạc tiền;<br>        Như cây cung bị gẫy,<br>        Thở than những ngày qua.\""},
  {t:"\"Nếu biết yêu tự ngã,<br>        Phải khéo bảo vệ mình,<br>        Người trí trong ba canh,<br>        Phải luôn luôn tỉnh thức.\""},
  {t:"\"Trước hết tự đặt mình,<br>        Vào những gì thích đáng.<br>        Sau mới giáo hóa người,<br>        Người trí khỏi bị nhiễm.\""},
  {t:"\"Hãy tự làm cho mình,<br>        Như điều mình dạy người.<br>        Khéo tự điều, điều người,<br>        Khó thay, tự điều phục!\""},
  {t:"\"Tự mình y chỉ mình,<br>        Nào có y chỉ khác.<br>        Nhờ khéo điều phục mình,<br>        Ðược y chỉ khó được.\""},
  {t:"\"Ðiều ác tự mình làm,<br>        Tự mình sanh, mình tạo.<br>        Nghiền nát kẻ ngu si,<br>        Như kim cương, ngọc báu.\""},
  {t:"\"Phá giới quá trầm trọng,<br>        Như dây leo bám cây<br>        Gieo hại cho tự thân,<br>        Như kẻ thù mong ước.\""},
  {t:"\"Dễ làm các điều ác,<br>        Dễ làm tự hại mình.<br>        Còn việc lành, việc tốt,<br>        Thật tối thượng khó làm.\""},
  {t:"\"Kẻ ngu si miệt thị,<br>        Giáo pháp bậc La Hán,<br>        Bậc Thánh, bậc chánh mạng.<br>        Chính do ác kiến này,<br>        Như quả loại cây lau<br>        Mang quả tự hoại diệt.\""},
  {t:"\"Tự mình, làm điều ác,<br>        Tự mình làm nhiễm ô,<br>        Tự mình không làm ác,<br>        Tự mình làm thanh tịnh.<br>        Tịnh, không tịnh tự mình,<br>        Không ai thanh tịnh ai!\""},
  {t:"\"Chớ theo pháp hạ liệt.<br>        Chớ sống mặc, buông lung;<br>        Chớ tin theo tà kiến,<br>        Chớ tăng trưởng tục trần.\""},
  {t:"\"Dầu lợi người bao nhiêu,<br>        Chớ quên phần tư lợi,<br>        Nhờ thắng trí tư lợi.<br>        Hãy chuyên tâm lợi mình.\""},
  {t:"\"Nỗ lực, chớ phóng dật!<br>        Hãy sống theo chánh hạnh;<br>        Người chánh hạnh hưởng lạc,<br>        Cả đời này, đời sau.\""},
  {t:"\"Hãy khéo sống chánh hạnh,<br>        Chớ sống theo tà hạnh!<br>        Người chánh hạnh hưởng lạc,<br>        Cả đời này, đời sau.\""},
  {t:"\"Hãy nhìn như bọt nước,<br>        Hãy nhìn như cảnh huyễn!<br>        Quán nhìn đời như vậy,<br>        Thần chết không bắt gặp.\""},
  {t:"\"Hãy đến nhìn đời này,<br>        Như xe vua lộng lẫy,<br>        Người ngu mới tham đắm,<br>        Kẻ trí nào đắm say.\""},
  {t:"\"Ai sống trước buông lung,<br>        Sau sống không phóng dật,<br>        Chói sáng rực đời này.<br>        Như trăng thoát mây che.\""},
  {t:"\"Ai dùng các hạnh lành,<br>        Làm xóa mờ nghiệp ác,<br>        Chói sáng rực đời này,<br>        Như trăng thoát mây che.\""},
  {t:"\"Ðời này thật mù quáng,<br>        Ít kẻ thấy rõ ràng.<br>        Như chim thoát khỏi lưới,<br>        Rất ít đi thiên giới.\""},
  {t:"\"Như chim thiên nga bay,<br>        Thần thông liệng giữa trời;<br>        Chiến thắng ma, ma quân,<br>        Kẻ trí thoát đời này.\""},
  {t:"\"Ai vi phạm một pháp,<br>        Ai nói lời vọng ngữ,<br>        Ai bác bỏ đời sau,<br>        Không ác nào không làm.\""},
  {t:"\"Keo kiết không sanh thiên,<br>        Kẻ ngu ghét bố thí,<br>        Người trí thích bố thí,<br>        Ðời sau, được hưởng lạc.\""},
  {t:"\"Hơn thống lãnh cõi đất,<br>        Hơn được sanh cõi trời,<br>        Hơn chủ trì vũ trụ,<br>        Quả Dự Lưu tối thắng.\""},
  {t:"\"Vị chiến thắng không bại,<br>        Vị bước đi trên đời,<br>        Không dấu tích chiến thắng,<br>        Phật giới rộng mênh mông,<br>        Ai dùng chân theo dõi<br>        Bậc không để dấu tích?\""},
  {t:"\"Ai giải tỏa lưới tham,<br>        Ái phược hết dắt dẫn,<br>        Phật giới rộng mênh mông,<br>        Ai dùng chân theo dõi,<br>        Bậc không để dấu tích?\""},
  {t:"\"Người trí chuyên thiền định,<br>        Thích an tịnh viễn ly,<br>        Chư thiên đều ái kính,<br>        Bậc chánh giác, chánh niệm.\""},
  {t:"\"Khó thay, được làm người,<br>        Khó thay, được sống còn,<br>        Khó thay, nghe diệu pháp,<br>        Khó thay, Phật ra đời!\""},
  {t:"\"Không làm mọi điều ác.<br>        Thành tựu các hạnh lành,<br>        Tâm ý giữ trong sạch,<br>        Chính lời chư Phật dạy.\""},
  {t:"\"Chư Phật thường giảng dạy;<br>        Nhẫn, khổ hạnh tối thượng,<br>        Niết bàn, quả tối thượng;<br>        Xuất gia không phá người;<br>        Sa môn không hại người.\""},
  {t:"\"Không phỉ báng, phá hoại,<br>        Hộ trì giới căn bản,<br>        Ăn uống có tiết độ,<br>        Sàng tọa chỗ nhàn tịnh<br>        Chuyên chú tăng thượng tâm,<br>        Chính lời chư Phật dạy.\""},
  {t:"\"Dầu mưa bằng tiền vàng,<br>        Các dục khó thỏa mãn.<br>        Dục đắng nhiều ngọt ít,<br>        Biết vậy là bậc trí.\""},
  {t:"\"Ðệ tử bậc chánh giác,<br>        Không tìm cầu dục lạc,<br>        Dầu là dục chư thiên,<br>        Chỉ ưa thích ái diệt.\""},
  {t:"\"Loài người sợ hoảng hốt,<br>        Tìm nhiều chỗ quy y,<br>        Hoặc rừng rậm, núi non,<br>        Hoặc vườn cây, đền tháp.\""},
  {t:"\"Quy y ấy không ổn,<br>        Không quy y tối thượng.<br>        Quy y các chỗ ấy,<br>        Không thoát mọi khổ đau?\""},
  {t:"\"Ai quy y Ðức Phật,<br>        Chánh pháp và chư tăng,<br>        Ai dùng chánh tri kiến,<br>        Thấy được bốn Thánh đế.\""},
  {t:"\"Thấy khổ và khổ tập,<br>        Thấy sự khổ vượt qua,<br>        Thấy đường Thánh tám ngành,<br>        Ðưa đến khổ não tận.\""},
  {t:"\"Thật quy y an ổn,<br>        Thật quy y tối thượng,<br>        Có quy y như vậy,<br>        Mới thoát mọi khổ đau.\""},
  {t:"\"Khó gặp bậc thánh nhơn,<br>        Không phải đâu cũng có.<br>        Chỗ nào bậc trí sanh,<br>        Gia đình tất an lạc.\""},
  {t:"\"Vui thay, Phật ra đời!<br>        Vui thay, Pháp được giảng!<br>        Vui thay, Tăng hòa hợp!<br>        Hòa hợp tu, vui thay!\""},
  {t:"\"Cúng dường bậc đáng cúng,<br>        Chư Phật hoặc đệ tử,<br>        Các bậc vượt hý luận,<br>        Ðoạn diệt mọi sầu bi.\""},
  {t:"\"Cúng dường bậc như vậy,<br>        Tịch tịnh, không sợ hãi,<br>        Các công đức như vậy,<br>        Không ai ước lường được.\""},
  {t:"\"Vui thay, chúng ta sống,<br>        Không hận, giữa hận thù!<br>        Giữa những người thù hận,<br>        Ta sống, không hận thù!\""},
  {t:"\"Vui thay, chúng ta sống,<br>        Không bệnh, giữa ốm đau!<br>        Giữa những người bệnh hoạn,<br>        Ta sống, không ốm đau.\""},
  {t:"\"Vui thay, chúng ta sống,<br>        Không rộn giữa rộn ràng;<br>        Giữa những người rộn ràng,<br>        Ta sống, không rộn ràng.\""},
  {t:"\"Vui thay chúng ta sống,<br>        Không gì, gọi của ta.<br>        Ta sẽ hưởng hỷ lạc,<br>        Như chư thiên Quang Âm.\""},
  {t:"\"Chiến thắng sinh thù oán,<br>        Thất bại chịu khổ đau,<br>        Sống tịch tịnh an lạc.<br>        Bỏ sau mọi thắng bại.\""},
  {t:"\"Lửa nào sánh lửa tham?<br>        Ác nào bằng sân hận?<br>        Khổ nào sánh khổ uẩn,<br>        Lạc nào bằng tịnh lạc.\""},
  {t:"\"Ðói ăn, bệnh tối thượng,<br>        Các hành, khổ tối thượng,<br>        Hiểu như thực là vậy,<br>        Niết Bàn, lạc tối thượng.\""},
  {t:"\"Không bệnh, lợi tối thượng,<br>        Biết đủ, tiền tối thượng,<br>        Thành tín đối với nhau,<br>        Là bà con tối thượng.<br>        Niết Bàn, lạc tối thượng.\""},
  {t:"\"Ðã nếm vị độc cư,<br>        Ðược hưởng vị nhàn tịnh,<br>        Không sợ hãi, không ác,<br>        Nếm được vị pháp hỷ.\""},
  {t:"\"Lành thay, thấy thánh nhân,<br>        Sống chung thường hưởng lạc.<br>        Không thấy những người ngu,<br>        Thường thường được an lạc.\""},
  {t:"\"Sống chung với người ngu,<br>        Lâu dài bị lo buồn.<br>        Khổ thay gần người ngu,<br>        Như thường sống kẻ thù.<br>        Vui thay, gần người trí,<br>        Như chung sống bà con.\""},
  {t:"\"Bậc hiền sĩ, trí tuệ<br>        Bậc nghe nhiều, trì giới,<br>        Bậc tự chế, Thánh nhân;<br>        Hãy gần gũi, thân cận<br>        Thiện nhân, trí giả ấy,<br>        Như trăng theo đường sao.\""},
  {t:"\"Tự chuyên, không đáng chuyên<br>        Không chuyên, việc đáng chuyên.<br>        Bỏ đích, theo hỷ ái,<br>        Ganh tị bậc tự chuyên.\""},
  {t:"\"Chớ gần gũi người yêu,<br>        Trọn đời xa kẻ ghét.<br>        Yêu không gặp là khổ,<br>        Oán phải gặp cũng đau.\""},
  {t:"\"Do vậy chớ yêu ai,<br>        Ái biệt ly là ác;<br>        Những ai không yêu ghét,<br>        Không thể có buộc ràng.\""},
  {t:"\"Do ái sinh sầu ưu,<br>        Do ái sinh sợ hãi,<br>        Ai thoát khỏi tham ái,<br>        Không sầu, đâu sợ hãi?\""},
  {t:"\"Ái luyến sinh sầu ưu,<br>        Ái luyến sinh sợ hãi.<br>        Ai giải thoát ái luyến<br>        Không sầu, đâu sợ hãi?\""},
  {t:"\"Hỷ ái sinh sầu ưu,<br>        Hỷ ái sinh sợ hãi.<br>        Ai giải thoát hỷ ái,<br>        Không sầu, đâu sợ hãi?"},
  {t:"\"Dục ái sinh sầu ưu,<br>        Dục ái sinh sợ hãi,<br>        Ai thoát khỏi dục ái,<br>        Không sầu, đâu sợ hãi?\""},
  {t:"\"Tham ái sinh sầu ưu,<br>        Tham ái sinh sợ hãi.<br>        Ai thoát khỏi tham ái,<br>        Không sầu, đâu sợ hãi.\""},
  {t:"\"Ðủ giới đức, chánh kiến;<br>        Trú pháp, chứng chân lý,<br>        Tự làm công việc mình,<br>        Ðược quần chúng ái kính.\""},
  {t:"\"Ước vọng pháp ly ngôn<br>        Ý cảm xúc thượng quả<br>        Tâm thoát ly ác dục,<br>        Xứng gọi bậc Thượng Lưu.\""},
  {t:"\"Khách lâu ngày ly hương,<br>        An toàn từ xa về,<br>        Bà con cùng thân hữu,<br>        Hân hoan đón chào mừng.\""},
  {t:"\"Cũng vậy các phước nghiệp,<br>        Ðón chào người làm lành,<br>        Ðời này đến đời kia.<br>        Như thân nhân, đón chào.\""},
  {t:"\"Bỏ phẫn nộ, ly mạn,<br>        Vượt qua mọi kiết sử,<br>        Không chấp trước danh sắc.<br>        Khổ không theo vô sản.\""},
  {t:"\"Ai chặn được phẫn nộ,<br>        Như dừng xe đang lăn,<br>        Ta gọi người đánh xe,<br>        Kẻ khác, cầm cương hờ.\""},
  {t:"\"Lấy không giận thắng giận,<br>        Lấy thiện thắng không thiện,<br>        Lấy thí thắng xan tham,<br>        Lấy chơn thắng hư ngụy.\""},
  {t:"\"Nói thật, không phẫn nộ,<br>        Của ít, thí người xin,<br>        Nhờ ba việc lành này,<br>        Người đến gần thiên giới.\""},
  {t:"\"Bậc hiền không hại ai,<br>        Thân thường được chế ngự,<br>        Ðạt được cảnh bất tử,<br>        Ðến đây, không ưu sầu.\""},
  {t:"\"Những người thường giác tỉnh,<br>        Ngày đêm siêng tu học,<br>        Chuyên tâm hướng Niết Bàn,<br>        Mọi lậu hoặc được tiêu.\""},
  {t:"\"A-tu-la, nên biết,<br>        Xưa vậy, nay cũng vậy,<br>        Ngồi im, bị người chê,<br>        Nói nhiều bị người chê.<br>        Nói vừa phải, bị chê.<br>        Làm người không bị chê,<br>        Thật khó tìm ở đời.\""},
  {t:"\"Xưa, vị lai, và nay,<br>        Ðâu có sự kiện này,<br>        Người hoàn toàn bị chê,<br>        Người trọn vẹn được khen.\""},
  {t:"\"Sáng sáng, thẩm xét kỹ.<br>        Bậc có trí tán thán.<br>        Bậc trí không tỳ vết,<br>        Ðầy đủ giới định tuệ.\""},
  {t:"\"Hạnh sáng như vàng ròng,<br>        Ai dám chê vị ấy?<br>        Chư thiên phải khen thưởng,<br>        Phạm Thiên cũng tán dương \"."},
  {t:"\"Giữ thân đừng phẫn nộ,<br>        Phòng thân khéo bảo vệ,<br>        Từ bỏ thân làm ác,<br>        Với thân làm hạnh lành.\""},
  {t:"\"Giữ lời đừng phẫn nộ,<br>        Phòng lời, khéo bảo vệ,<br>        Từ bỏ lời thô ác,<br>        Với lời, nói điều lành.\""},
  {t:"\"Giữ ý đừng phẫn nộ,<br>        Phòng ý, khéo bảo vệ,<br>        Từ bỏ ý nghĩ ác,<br>        Với ý, nghĩ hạnh lành.’"},
  {t:"\"Bậc trí bảo vệ thân,<br>        Bảo vệ luôn lời nói<br>        Bảo vệ cả tâm tư,<br>        Ba nghiệp khéo bảo vệ.\""},
  {t:"\"Ngươi nay giống lá héo,<br>        Diêm sứ đang chờ ngươi,<br>        Ngươi đứng trước cửa chết,<br>        Ðường trường thiếu tư lương.\""},
  {t:"\"Hãy tự làm hòn đảo,<br>        Tinh cần gấp, sáng suốt.<br>        Trừ cấu uế, thanh tịnh,<br>        Ðến Thánh địa chư Thiên.\""},
  {t:"\"Ðời ngươi nay sắp tàn,<br>        Tiến gần đến Diêm Vương.<br>        Giữa đường không nơi nghỉ,<br>        Ðường trường thiếu tư lương.\""},
  {t:"\"Hãy tự làm hòn đảo,<br>        Tinh cần gấp sáng suốt.<br>        Trừ cấu uế, thanh tịnh,<br>        Chẳng trở lại sanh già.\""},
  {t:"\"Bậc trí theo tuần tự.<br>        Từng sát na trừ dần.<br>        Như thợ vàng lọc bụi<br>        Trừ cấu uế nơi mình.\""},
  {t:"\"Như sét từ sắt sanh,<br>        Sắt sanh lại ăn sắt,<br>        Cũng vậy, quá lợi dưỡng<br>        Tự nghiệp dẫn cõi ác.\""},
  {t:"\"Không tụng làm nhớp kinh,<br>        Không đứng dậy, bẩn nhà,<br>        Biếng nhác làm nhơ sắc,<br>        Phóng dật uế người canh\""},
  {t:"\"Tà hạnh nhơ đàn bà,<br>        Xan tham nhớp kẻ thí,<br>        Ác pháp là vết nhơ,<br>        Ðời này và đời sau.\""},
  {t:"\"Trong hàng cấu uế ấy,<br>        Vô minh, nhơ tối thượng,<br>        Ðoạn nhơ ấy, tỷ kheo,<br>        Thành bậc không uế nhiễm.\""},
  {t:"\"Dễ thay, sống không hổ<br>        Sống lỗ mãng như quạ,<br>        Sống công kích huênh hoang,<br>        Sống liều lĩnh, nhiễm ô.\""},
  {t:"\"Khó thay, sống xấu hổ,<br>        Thường thường cầu thanh tịnh.<br>        Sống vô tư, khiêm tốn,<br>        Trong sạch và sáng suốt.\""},
  {t:"\"Ai ở đời sát sinh,<br>        Nói láo không chân thật,<br>        Ở đời lấy không cho,<br>        Qua lại với vợ người.\""},
  {t:"\"Uống rượu men, rượu nấu,<br>        Người sống đam mê vậy,<br>        Chính ngay tại đời này,<br>        Tự đào bới gốc mình.\""},
  {t:"\"Vậy người, hãy nên biết,<br>        Không chế ngự là ác.<br>        Chớ để tham phi pháp,<br>        Làm người đau khổ dài.\""},
  {t:"\"Do tín tâm, hỷ tâm<br>        Loài người mới bố thí.<br>        Ở đây ai bất mãn<br>        Người khác được ăn uống,<br>        Người ấy ngày hoặc đêm,<br>        Không đạt được tâm định?\""},
  {t:"\"Ai cắt được, phá được,<br>        Tận gốc nhổ tâm ấy.<br>        Người ấy ngày hoặc đêm,<br>        Ðạt được tâm thiền định.\""},
  {t:"\"Lửa nào bằng lửa tham!<br>        Chấp nào bằng sân hận!<br>        Lưới nào bằng lưới si!<br>        Sông nào bằng sông ái! \""},
  {t:"\"Dễ thay thấy lỗi người,<br>        Lỗi mình thấy mới khó.<br>        Lỗi người ta phanh tìm,<br>        Như sàng trấu trong gạo,<br>        Còn lỗi mình, che đậy,<br>        Như kẻ gian dấu bài.\""},
  {t:"\"Ai thấy lỗi của người,<br>        Thường sanh lòng chỉ trích,<br>        Người ấy lậu hoặc tăng,<br>        Rất xa lậu hoặc diệt.\""},
  {t:"\"Hư không, không dấu chân,<br>        Ngoài đây, không sa môn,<br>        Chúng sanh thích hý luận,<br>        Như lai, hý luận trừ.\""},
  {t:"\"Hư không, không dấu chân,<br>        Ngoài đây, không sa môn.<br>        Các hành không thường trú,<br>        Chư Phật không giao động.\""},
  {t:"\"Ngươi đâu phải pháp trụ,<br>        Xử sự quá chuyên chế,<br>        Bậc trí cần phân biệt<br>        Cả hai chánh và tà!\""},
  {t:"\"Không chuyên chế, đúng pháp,<br>        Công bằng, dắt dẫn người,<br>        Bậc trí sống đúng pháp,<br>        Thật xứng danh pháp trụ.\""},
  {t:"\"Không phải vì nói nhiều,<br>        Mới xứng danh bậc trí.<br>        An ổn, không oán sợ.<br>        Thật đáng gọi bậc trí.\""},
  {t:"\"Không phải vì nói nhiều,<br>        Mới xứng danh trì pháp,<br>        Những ai tuy nghe ít,<br>        Nhưng thân hành đúng pháp,<br>        Không phóng túng chánh pháp,<br>        Mới xứng danh trì pháp.\""},
  {t:"\"Không phải là trưởng lão,<br>        Dầu cho có bạc đầu.<br>        Người chỉ tuổi tác cao,<br>        Ðược gọi là: \"Lão ngu.\""},
  {t:"\"Ai chân thật, đúng pháp,<br>        Không hại, biết chế phục,<br>        Bậc trí không cấu uế,<br>        Mới xứng danh Trưởng Lão.\""},
  {t:"\"Không phải nói lưu loát,<br>        Không phải sắc mặt đẹp,<br>        Thành được người lương thiện,<br>        Nếu ganh, tham, dối trá.\""},
  {t:"\"Ai cắt được, phá được<br>        Tận gốc nhổ tâm ấy<br>        Người trí ấy diệt sân,<br>        Ðược gọi người hiền thiện.\""},
  {t:"\"Ðầu trọc, không sa môn<br>        Nếu phóng túng, nói láo.<br>        Ai còn đầy dục tham,<br>        Sao được gọi sa môn?\""},
  {t:"\"Ai lắng dịu hoàn toàn,<br>        Các điều ác lớn nhỏ,<br>        Vì lắng dịu ác pháp,<br>        Ðược gọi là Sa môn.\""},
  {t:"\"Chỉ khất thực nhờ người,<br>        Ðâu phải là tỷ kheo!<br>        Phải theo pháp toàn diện,<br>        Khất sĩ không, không đủ.\""},
  {t:"\"Ai vượt qua thiện ác,<br>        Chuyên sống đời Phạm Hạnh,<br>        Sống thẩm sát ở đời,<br>        Mới xứng danh tỷ kheo.\""},
  {t:"\"Im lặng nhưng ngu si,<br>        Ðâu được gọi ẩn sĩ?<br>        Như người cầm cán cân,<br>        Bậc trí chọn điều lành.\""},
  {t:"\"Từ bỏ các ác pháp,<br>        Mới thật là ẩn sĩ.<br>        Ai thật hiểu hai đời<br>        Mới được gọi ẩn sĩ.\""},
  {t:"\"Còn sát hại sinh linh,<br>        Ðâu được gọi Hiền thánh.<br>        Không hại mọi hữu tình,<br>        Mới được gọi Hiền Thánh.\""},
  {t:"\"Chẳng phải chỉ giới cấm<br>        Cũng không phải học nhiều,<br>        Chẳng phải chứng thiền định,<br>        Sống thanh vắng một mình.\""},
  {t:"\"Ta hưởng an ổn lạc,<br>        Phàm phu chưa hưởng được.<br>        Tỷ kheo, chớ tự tin<br>        Khi lậu hoặc chưa diệt.\""},
  {t:"\"Tám chánh, đường thù thắng,<br>        Bốn câu, lý thù thắng.<br>        Ly tham, pháp thù thắng,<br>        Giữa các loài hai chân,<br>        Pháp nhãn, người thù thắng.\""},
  {t:"\"Ðường này, không đường khác<br>        Ðưa đến kiến thanh tịnh.<br>        Nếu ngươi theo đường này,<br>        Ma quân sẽ mê loạn.\""},
  {t:"\"Nếu người theo đường này,<br>        Ðau khổ được đoạn tận.<br>        Ta dạy người con đường.<br>        Với trí, gai chướng diệt.\""},
  {t:"\"Người hãy nhiệt tình làm,<br>        Như Lai chỉ thuyết dạy.<br>        Người hành trì thiền định<br>        Thoát trói buộc Ác ma.\""},
  {t:"\"Tất cả hành vô thường \"<br>        Với Tuệ, quán thấy vậy<br>        Ðau khổ được nhàm chán;<br>        Chính con đường thanh tịnh.\""},
  {t:"\"Tất cả hành khổ đau<br>        Với Tuệ quán thấy vậy,<br>        Ðau khổ được nhàm chán;<br>        Chính con đường thanh tịnh.\""},
  {t:"\"Tất cả pháp vô ngã,<br>        Với Tuệ quán thấy vậy,<br>        Ðau khổ được nhàm chán<br>        Chính con đường thanh tịnh.\""},
  {t:"\"Khi cần, không nỗ lực,<br>        Tuy trẻ mạnh, nhưng lười<br>        Chí nhu nhược, biếng nhác.<br>        Với trí tuệ thụ động,<br>        Sao tìm được chánh đạo?\""},
  {t:"\"Lời nói được thận trọng,<br>        Tâm tư khéo hộ phòng,<br>        Thân chớ làm điều ác,<br>        Hãy giữ ba nghiệp tịnh,<br>        Chứng đạo thánh nhân dạy.\""},
  {t:"\"Tu thiền, trí tuệ sanh,<br>        Bỏ Thiền, trí tuệ diệt.<br>        Biết con đường hai ngả<br>        Ðưa đến hữu, phi hữu,<br>        Hãy tự mình nỗ lực,<br>        Khiến trí tuệ tăng trưởng.\""},
  {t:"\"Ðốn rừng không đốn cây<br>        Từ rừng, sinh sợ hãi;<br>        Ðốn rừng và ái dục,<br>        Tỷ kheo, hãy tịch tịnh.\""},
  {t:"\"Khi nào chưa cắt tiệt,<br>        Ái dục giữa gái trai,<br>        Tâm ý vẫn buộc ràng,<br>        Như bò con vú mẹ.\""},
  {t:"\"Tự cắt giây ái dục,<br>        Như tay bẻ sen thu,<br>        Hãy tu đạo tịch tịnh,<br>        Niết-Bàn, Thiện Thệ dạy.\""},
  {t:"\"Mùa mưa ta ở đây<br>        Ðông, hạ cũng ở đây,<br>        Người ngu tâm tưởng vậy,<br>        Không tự giác hiểm nguy.\""},
  {t:"\"Người tâm ý đắm say<br>        Con cái và súc vật,<br>        Tử thần bắt người ấy,<br>        Như lụt trôi làng ngủ. \""},
  {t:"\"Một khi tử thần đến,<br>        Không có con che chở,<br>        Không cha, không bà con,<br>        Không thân thích che chở.\""},
  {t:"\"Biết rõ ý nghĩa này,<br>        Bậc trí lo trì giới,<br>        Mau lẹ làm thanh tịnh,<br>        Con đường đến Niết-Bàn.\""},
  {t:"\"Nhờ từ bỏ lạc nhỏ,<br>        Thấy được lạc lớn hơn,<br>        Bậc trí bỏ lạc nhỏ,<br>        Thấy được lạc lớn hơn.\""},
  {t:"\"Gieo khổ đau cho người,<br>        Mong cầu lạc cho mình,<br>        Bị hận thù buộc ràng<br>        Không sao thoát hận thù.\""},
  {t:"\"Việc đáng làm, không làm,<br>        Không đáng làm, lại làm,<br>        Người ngạo mạn, phóng dật,<br>        Lậu hoặc ắt tăng trưởng.\""},
  {t:"\"Người siêng năng cần mẫn,<br>        Thường thường quán thân niệm,<br>        Không làm việc không đáng,<br>        Gắng làm việc đáng làm,<br>        Người tư niệm giác tỉnh,<br>        Lậu hoặc được tiêu trừ.\""},
  {t:"\"Sau khi giết mẹ cha,<br>        Giết hai Vua Sát lỵ,<br>        Giết vương quốc, quần thần<br>        Vô ưu, phạm chí sống.\""},
  {t:"\"Sau khi giết mẹ cha,<br>        Hai vua Bà-la-môn,<br>        Giết hổ tướng thứ năm<br>        Vô ưu, phạm chí sống.\""},
  {t:"\"Ðệ tử Gotama,<br>        Luôn luôn tự tỉnh giác<br>        Vô luận ngày hay đêm,<br>        Tưởng Phật Ðà thường niệm.\""},
  {t:"\"Ðệ tử Gotama,<br>        Luôn luôn tự tỉnh giác,<br>        Vô luận ngày hay đêm,<br>        Tưởng Chánh Pháp thường niệm\""},
  {t:"\"Ðệ tử Gotama,<br>        Luôn luôn tự tỉnh giác,<br>        Vô luận ngày hay đêm,<br>        Tưởng Tăng Già thường niệm.\""},
  {t:"\"Ðệ tử Gotama,<br>        Luôn luôn tự tỉnh giác,<br>        Vô luận ngày hay đêm,<br>        Tưởng sắc thân thường niệm.\""},
  {t:"\"Ðệ tử Gotama,<br>        Luôn luôn tự tỉnh giác,<br>        Vô luận ngày hay đêm,<br>        Ý vui niềm bất hại.\""},
  {t:"\"Ðệ tử Gotama,<br>        Luôn luôn tự tỉnh giác,<br>        Vô luận ngày hay đêm,<br>        Ý vui tu thiền quán.\""},
  {t:"\"Vui hạnh xuất gia khó,<br>        Tại gia sinh hoạt khó,<br>        Sống bạn không đồng, khổ,<br>        Trôi lăn luân hồi, khổ,<br>        Vậy chớ sống luân hồi,<br>        Chớ chạy theo đau khổ.\""},
  {t:"\"Tín tâm, sống giới hạnh<br>        Ðủ danh xưng tài sản,<br>        Chỗ nào người ấy đến,<br>        Chỗ ấy được cung kính.\""},
  {t:"\"Người lành dầu ở xa<br>        Sáng tỏ như núi tuyết,<br>        Người ác dầu ở gần<br>        Như tên bắn đêm đen.\""},
  {t:"\"Ai ngồi nằm một mình.<br>        Ðộc hành không buồn chán,<br>        Tự điều phục một mình<br>        Sống thoải mái rừng sâu.\""},
  {t:"\"Nói láo đọa địa ngục<br>        Có làm nói không làm,<br>        Cả hai chết đồng đẳng,<br>       Làm người, nghiệp hạ liệt.\""},
  {t:"\"Nhiều người khoác cà sa,<br>        Ác hạnh không nhiếp phục.<br>        Người ác, do ác hạnh,<br>        Phải sanh cõi Ðịa ngục.\""},
  {t:"\"Tốt hơn nuốt hòn sắt<br>        Cháy đỏ như lửa hừng,<br>        Hơn ác giới, buông lung<br>        Ăn đồ ăn quốc độ.\""},
  {t:"\"Bốn nạn chờ đợi người,<br>        Phóng dật theo vợ người;<br>        Mắc họa, ngủ không yên,<br>        Bị chê là thứ ba,<br>        Ðọa địa ngục, thứ bốn.\""},
  {t:"\"Mắc họa, đọa ác thú,<br>        Bị hoảng sợ, ít vui.<br>        Quốc vương phạt trọng hình.<br>        Vậy chớ theo vợ người.\""},
  {t:"\"Như cỏ sa vụng nắm,<br>        Tất bị họa đứt tay<br>        Hạnh Sa môn tà vạy,<br>        Tất bị đọa địa ngục.\""},
  {t:"\"Sống phóng đãng buông lung,<br>        Theo giới cấm ô nhiễm,<br>        Sống Phạm hạnh đáng nghi<br>        Sao chứng được quả lớn?"},
  {t:"\"Cần phải làm, nên làm<br>        Làm cùng tận khả năng<br>        Xuất gia sống phóng đãng,<br>        Chỉ tăng loạn bụi đời.\""},
  {t:"\"Ác hạnh không nên làm,<br>        Làm xong, chịu khổ lụy,<br>        Thiện hạnh, ắt nên làm,<br>        Làm xong, không ăn năn.\""},
  {t:"\"Như thành ở biên thùy,<br>        Trong ngoài đều phòng hộ<br>        Cũng vậy, phòng hộ mình,<br>        Sát na chớ buông lung.<br>        Giây phút qua, sầu muộn.<br>        Khi rơi vào địa ngục.\""},
  {t:"\"Không đáng hổ, lại hổ.<br>        Việc đáng hổ, lại không.<br>        Do chấp nhận tà kiến,<br>        Chúng sanh đi ác thú.\""},
  {t:"\"Không đáng sợ, lại sợ,<br>        Ðáng sợ, lại thấy không,<br>        Do chấp nhận tà kiến.<br>        Chúng sanh đi ác thú.\""},
  {t:"\"Không lỗi, lại thấy lỗi,<br>        Có lỗi, lại thấy không,<br>        Do chấp nhận tà kiến,<br>        Chúng sanh đi ác thú.\""},
  {t:"\"Có lỗi, biết có lỗi,<br>        Không lỗi, biết là không,<br>        Do chấp nhận chánh kiến,<br>        Chúng sanh đi cõi lành.\""},
  {t:"\"Ta như voi giữa trận,<br>        Hứng chịu cung tên rơi,<br>        Chịu đựng mọi phỉ báng.<br>        Ác giới rất nhiều người.\""},
  {t:"\"Voi luyện, đưa dự hội,<br>        Ngựa luyện, được vua cưỡi,<br>        Người luyện, bậc tối thượng<br>        Chịu đựng mọi phỉ báng.\""},
  {t:"\"Tốt thay, con la thuần,<br>        Thuần chủng loài ngựa Sin.<br>        Ðại tượng, voi có ngà.<br>        Tự điều mới tối thượng.\""},
  {t:"\"Chẳng phải loài cưỡi ấy,<br>        Ðưa người đến Niết-Bàn,<br>        Chỉ có người tự điều,<br>        Ðến đích, nhờ điều phục.\""},
  {t:"\"Con voi tên Tài Hộ,<br>        Phát dục, khó điều phục,<br>        Trói buộc, không ăn uống.<br>        Voi nhớ đến rừng voi.\""},
  {t:"\"Người ưa ngủ, ăn lớn<br>        Nằm lăn lóc qua lại,<br>        Chẳng khác heo no bụng,<br>        Kẻ ngu nhập thai mãi.\""},
  {t:"\"Trước tâm này buông lung,<br>        Chạy theo ái, dục, lạc.<br>        Nay Ta chánh chế ngự,<br>        Như cầm móc điều voi.\""},
  {t:"\"Hãy vui không phóng dật,<br>        Khéo phòng hộ tâm ý.<br>        Kéo mình khỏi ác đạo,<br>        Như voi bị sa lầy.\""},
  {t:"\"Nếu được bạn hiền trí<br>        Ðáng sống chung, hạnh lành,<br>        Nhiếp phục mọi hiểm nguy<br>        Hoan hỷ sống chánh niệm.\""},
  {t:"\"Không gặp bạn hiền trí.<br>        Ðáng sống chung, hạnh lành<br>        Như vua bỏ nước bại,<br>        Hãy sống riêng cô độc,<br>        Như voi sống rừng voi.\""},
  {t:"\"Tốt Hơn sống một mình,<br>        Không kết bạn người ngu.<br>        Ðộc thân, không ác hạnh<br>        Sống vô tư vô lự,<br>        Như voi sống rừng voi.\""},
  {t:"\"Vui thay, bạn lúc cần!<br>        Vui thay, sống biết đủ,<br>        Vui thay, chết có đức!<br>        Vui thay, mọi khổ đoạn.\""},
  {t:"\"Vui thay, hiếu kính mẹ,<br>        Vui thay, hiếu kính cha,<br>        Vui thay, kính Sa môn,<br>        Vui thay, kính Hiền Thánh.\""},
  {t:""},
  {t:"\"Ta hàng phục tất cả,<br>        Ta rõ biết tất cả,<br>        Không bị nhiễm pháp nào.<br>        Ta từ bỏ tất cả<br>        Ái diệt, tự giải thoát.<br>        Ðã tự mình thắng trí,<br>        Ta gọi ai thầy ta?\""},
  {t:"\"Pháp thí, thắng mọi thí!<br>        Pháp vị, thắng mọi vị!<br>        Pháp hỷ, thắng mọi hỷ!<br>        Ái diệt, dứt mọi khổ!\""},
  {t:"\"Tài sản hại người ngu.<br>        Không người tìm bờ kia<br>        Kẻ ngu vì tham giàu,<br>        Hại mình và hại người.\""},
  {t:"\"Cỏ làm hại ruộng vườn,<br>        Tham làm hại người đời.<br>        Bố thí người ly tham,<br>        Do vậy được quả lớn.\""},
  {t:"\"Cỏ làm hại ruộng vườn,<br>        Sân làm hại người đời.<br>        Bố thí người ly sân,<br>        Do vậy được quả lớn.\""},
  {t:"\"Cỏ làm hại ruộng vườn,<br>        Si làm hại người đời,<br>        Bố thí người ly si,<br>        Do vậy được quả lớn.\""},
  {t:"\"Cỏ làm hại ruộng vườn,<br>        Dục làm hại người đời.<br>        Bố thí người ly dục,<br>        Do vậy được quả lớn.\""},
  {t:"\"Lành thay, phòng hộ mắt!<br>        Lành thay, phòng hộ tai.<br>        Lành thay, phòng hộ mũi,<br>        Lành thay, phòng hộ lưỡi.\""},
  {t:"\"Lành thay, phòng hộ thân!<br>        Lành thay, phòng hộ lời,<br>        Lành thay, phòng hộ ý.<br>        Lành thay, phòng tất cả.<br>        Tỷ kheo phòng tất cả.<br>        Thoát được mọi khổ đau.\""},
  {t:"\"Người chế ngự tay chân,<br>        Chế ngự lời và đầu,<br>        Vui thích nội thiền định.<br>        Ðộc thân, biết vừa đủ,<br>        Thật xứng gọi tỷ kheo.\""},
  {t:"\"Tỷ kheo chế ngự miệng,<br>        Vừa lời, không cống cao,<br>        Khi trình bày pháp nghĩa,<br>        Lời lẽ dịu ngọt ngào.\""},
  {t:"\"Vị tỷ kheo thích pháp,<br>        Mến pháp, suy tư Pháp.<br>        Tâm tư niệm chánh Pháp,<br>        Không rời bỏ chánh Pháp.\""},
  {t:"\"Không khinh điều mình được,<br>        Không ganh người khác được<br>        Tỷ kheo ganh tị người,<br>        Không sao chứng Thiền Ðịnh.\""},
  {t:"\"Tỷ kheo dầu được ít,<br>        Không khinh điều mình được,<br>        Sống thanh tịnh không nhác,<br>        Chư thiên khen vị này.\""},
  {t:"\"Hoàn toàn, đối danh sắc,<br>        Không chấp Ta, của Ta.<br>        Không chấp, không sầu não.<br>        Thật xứng danh Tỷ kheo.\""},
  {t:"\"Tỷ kheo trú từ bi,<br>        Tín thành giáo Pháp Phật,<br>        Chứng cảnh giới tịch tỉnh.<br>        Các hạnh an tịnh lạc.\""},
  {t:"\"Tỷ-kheo, tát thuyền này,<br>        Thuyền không, nhẹ đi mau.<br>        Trừ tham, diệt sân hận,<br>        Tất chứng đạt Niết-Bàn.\""},
  {t:"\"Ðoạn năm, từ bỏ năm<br>        Tụ tập năm tối thượng<br>        Tỷ kheo vượt năm ái<br>        Xứng danh \"Vượt bộc lưu\""},
  {t:"\"Tỷ kheo, hãy tu thiền,<br>        Chớ buông lung phóng dật,<br>        Tâm chớ đắm say dục,<br>        Phóng dật, nuốt sắt nóng<br>        Bị đốt, chớ than khổ!\""},
  {t:"\"Không trí tuệ, không thiền,<br>        Không thiền, không trí tuệ.<br>        Người có thiền có tuệ,<br>        Nhất định gần Niết-Bàn.\""},
  {t:"\"Bước vào ngôi nhà trống,<br>        Tỷ kheo tâm an tịnh,<br>        Thọ hưởng vui siêu nhân<br>        Tịnh quán theo chánh pháp.\""},
  {t:"\"Người luôn luôn chánh niệm,<br>        Sự sanh diệt các uẩn,<br>        Ðược hoan hỷ, hân hoan,<br>        Chỉ bậc bất tử biết.\""},
  {t:"\"Ðây Tỷ kheo có trí,<br>        Tụ tập pháp căn bản<br>        Hộ căn, biết vừa đủ,<br>        Giữ gìn căn bản giới,<br>        Thường gần gũi bạn lành,<br>        Sống thanh tịnh tinh cần.\""},
  {t:"\"Giao thiệp khéo thân thiện,<br>        Cử chỉ mực đoan trang.<br>  Vui thay, già có giới!<br>        Vui thay, tín an trú!<br>        Vui thay, được trí tuệ,<br>        Vui thay, ác không làm.\""},
  {t:"\"Người sống đời phóng dật,<br>        Ái tăng như giây leo.<br>        Nhảy đời này đời khác,<br>        Như vượn tham quả rừng.\""},
  {t:"\"Ai sống trong đời này,<br>        Bị ái dục buộc ràng<br>        Sầu khổ sẽ tăng trưởng,<br>        Như cỏ Bi gặp mưa.\""},
  {t:"\"Ai sống trong đời này<br>        Ái dục được hàng phục<br>        Sầu rơi khỏi người ấy<br>        Như giọt nước lá sen.\""},
  {t:"\"Ðây điều lành Ta dạy,<br>        Các người tụ họp đây.<br>        Hãy nhổ tận gốc ái<br>        Như nhổ gốc cỏ Bi.<br>        Chớ để ma phá hoại,<br>        Như giòng nước cỏ lau.\""},
  {t:"\"Như cây bị chặt đốn,<br>        Gốc chưa hại vẫn bền<br>        Ái tùy miên chưa nhổ,<br>        Khổ này vẫn sanh hoài.\""},
  {t:"\"Ba mươi sáu dòng Ái,<br>        Trôi người đốn khả ái.<br>        Các tư tưởng tham ái.<br>        Cuốn trôi người tà kiến.\""},
  {t:"\"Dòng ái dục chảy khắp,<br>        Như giây leo mọc tràn,<br>        Thấy giây leo vừa sanh,<br>        Với tuệ, hãy đoạn gốc.\""},
  {t:"\"Người đời nhớ ái dục,<br>        Ưa thích các hỷ lạc.<br>        Tuy mong cầu an lạc,<br>        Họ vẫn phải sanh già.\""},
  {t:"\"Người bị ái buộc ràng,<br>        Vùng vẫy và hoảng sợ,<br>        Như thỏ bị sa lưới.<br>        Họ sanh ái trói buộc,<br>        Chịu khổ đau dài dài.\""},
  {t:"\"Người bị ái buộc ràng,<br>        Vùng vẫy và hoảng sợ,<br>        Như thỏ bị sa lưới.<br>        Do vậy vị tỷ kheo,<br>        Mong cầu mình ly tham<br>        Nên nhiếp phục ái dục.\""},
  {t:"\"Lìa rừng lại hướng rừng<br>        Thoát rừng chạy theo rừng.<br>        Nên xem người như vậy,<br>        Ðược thoát khỏi buộc ràng.<br>        Lại chạy theo ràng buộc.\""},
  {t:"\"Sắt, cây, gai trói buộc<br>        Người trí xem chưa bền.<br>        Tham châu báu, trang sức<br>        Tham vọng vợ và con.\""},
  {t:"\"Người có trí nói rằng:<br>        \"Trói buộc này thật bền.<br>        Rì kéo xuống, lún xuống,<br>        Nhưng thật sự khó thoát.<br>        Người trí cắt trừ nó,<br>        Bỏ dục lạc, không màng.\""},
  {t:"\"Người đắm say ái dục<br>        Tự lao mình xuống dòng<br>        Như nhện sa lưới dệt.<br>        Người trí cắt trừ nó,<br>        Bỏ mọi khổ, không màng.\""},
  {t:"\"Bỏ quá, hiện, vị lai,<br>        Ðến bờ kia cuộc đời,<br>        Ý giải thoát tất cả,<br>        Chớ vướng lại sanh già.\""},
  {t:"\"Người tà ý nhiếp phục,<br>        Tham sắc bén nhìn tịnh,<br>        Người ấy ái tăng trưởng,<br>        Làm giây trói mình chặt.\""},
  {t:"\"Ai vui, an tịnh ý,<br>        Quán bất tịnh, thường niệm,<br>        Người ấy sẽ diệt ái,<br>        Cắt đứt Ma trói buộc.\""},
  {t:"\"Ai tới đích, không sợ,<br>        Ly ái, không nhiễm ô<br>        Nhổ mũi tên sanh tử,<br>        Thân này thân cuối cùng.\""},
  {t:"\"\"Giao thiệp khéo thân thiện,<br>        Cử chỉ mực đoan trang.<br>        Do vậy hưởng vui nhiều,<br>        Sẽ dứt mọi khổ đau.\""},
  {t:"\"Như hoa Vassikà,<br>        Quăng bỏ cánh úa tàn,<br>        Cũng vậy vị Tỷ kheo,<br>        Hãy giải thoát tham sân.\""},
  {t:"\"Thân tịnh, lời an tịnh,<br>        An tịnh, khéo thiền tịnh.<br>        Tỷ kheo bỏ thế vật,<br>        Xứng danh \"bậc tịch tịnh \"."},
  {t:"\"Tự mình chỉ trích mình,<br>        Tự mình dò xét mình,<br>        Tỷ kheo tự phòng hộ<br>        Chánh niệm, trú an lạc.\""},
  {t:"\"Tự mình y chỉ mình,<br>        Tự mình đi đến mình,<br>        Vậy hãy tự điều phục,<br>        Như khách buôn ngựa hiền.\""},
  {t:"\"Tỷ kheo nhiều hân hoan,<br>        Tịnh tín giáo pháp Phật,<br>        Chứng cảnh giới tịch tịnh,<br>        Các hạnh an tịnh lạc.\""},
  {t:"\"Tỷ kheo tuy tuổi nhỏ<br>        Siêng tu giáo pháp Phật,<br>        Soi sáng thế gian này,<br>        Như trăng thoát khỏi mây.\""},
  {t:"\"Hỡi này Bà là môn,<br>        Hãy tinh tấn đoạn dòng,<br>        Từ bỏ các dục lạc,<br>        Biết được hành đoạn diệt,<br>        Người là bậc vô vi.\""},
  {t:"\"Nhờ thường trú hai pháp<br>        Ðến được bờ bên kia.<br>        Bà-la-môn có trí,<br>        Mọi kiết sử dứt sạch.\""},
  {t:"\"Không bờ này, bờ kia<br>        Cả hai bờ không có,<br>        Lìa khổ, không trói buộc<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Tu thiền, trú ly trần<br>        Phận sự xong, vô lậu,<br>        Ðạt được đích tối thượng,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Mặt trời sáng ban ngày,<br>        Mặt trăng sáng ban đêm.<br>        Khí giới sáng Sát lỵ,<br>        Thiền định sáng Phạm chí.<br>        Còn hào quang đức Phật,<br>        Chói sáng cả ngày đêm.\""},
  {t:"\"Dứt ác gọi Phạm chí,<br>        Tịnh hạnh gọi Sa môn,<br>        Tự mình xuất cấu uế,<br>        Nên gọi bậc xuất gia.\""},
  {t:"\"Chớ có đập Phạm chí!<br>        Phạm chí chớ đập lại!<br>        Xấu thay đập Phạm chí<br>        Ðập trả lại xấu hơn!\""},
  {t:"\"Ðối vị Bà-la-môn,<br>        Ðây không lợi ích nhỏ.<br>        Khi ý không ái luyến,<br>        Tâm hại được chặn đứng,<br>        Chỉ khi ấy khổ diệt,\""},
  {t:"\"Với người thân miệng ý,<br>        Không làm các ác hạnh<br>        Ba nghiệp được phòng hộ,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Từ ai, biết chánh pháp<br>        Bậc Chánh Giác thuyết giảng,<br>        Hãy kính lễ vị ấy,<br>        Như phạm chí chờ lửa.\""},
  {t:"\"Ðược gọi Bà-la-môn,<br>        Không vì đầu bện tóc,<br>        Không chủng tộc, thọ sanh,<br>        Ai thật chân, chánh, tịnh,<br>        Mới gọi Bà-la-môn.\""},
  {t:"\"Kẻ ngu, có ích gì<br>        Bện tóc với da dê,<br>        Nội tâm toàn phiền não,<br>        Ngoài mặt đánh bóng suông.\""},
  {t:"\"Người mặc áo đống rác,<br>        Gầy ốm, lộ mạch gân,<br>        Ðộc thân thiền trong rừng.<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ta không gọi Phạm Chí,<br>        Vì chỗ sanh, mẹ sanh.<br>        Chỉ được gọi tên suông<br>        Nếu tâm còn phiền não.<br>        Không phiền não, chấp trước<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ðoạn hết các kiết sử,<br>        Không còn gì lo sợ<br>        Không đắm trước buộc ràng<br>        Ta gọi Bà-la-môn"},
  {t:"\"Bỏ đai da, bỏ cương<br>        Bỏ dây, đồ sở thuộc,<br>        Bỏ then chốt, sáng suốt,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Không ác ý, nhẫn chịu,<br>        Phỉ báng, đánh, phạt hình,<br>        Lấy nhẫn làm quân lực,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Không hận, hết bổn phận,<br>        Trì giới, không tham ái,<br>        Nhiếp phục, thân cuối cùng,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Như nước trên lá sen,<br>        Như hột cải đầu kim,<br>        Người không nhiễm ái dục,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ai tự trên đời này,<br>        Giác khổ, diệt trừ khổ,<br>        Bỏ gánh nặng, giải thoát,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Người trí tuệ sâu xa,<br>        Khéo biết đạo, phi đạo<br>        Chứng đạt đích vô thượng,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Không liên hệ cả hai,<br>        Xuất gia và thế tục,<br>        Sống độc thân, ít dục,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Bỏ trượng, đối chúng sanh,<br>        Yếu kém hay kiên cường,<br>        Không giết, không bảo giết,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Thân thiện giữa thù địch<br>        Ôn hòa giữa hung hăng.<br>        Không nhiễm, giữa nhiễm trước,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Người bỏ rơi tham sân,<br>        Không mạn không ganh tị,<br>        Như hột cải đầu kim,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Nói lên lời ôn hòa,<br>        Lợi ích và chân thật,<br>        Không mất lòng một ai,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ở đời, vật dài, ngắn,<br>        Nhỏ, lớn, đẹp hay xấu<br>        Phàm không cho không lấy,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Người không có hy cầu,<br>        Ðời này và đời sau,<br>        Không hy cầu, giải thoát,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Người không còn tham ái,<br>        Có trí, không nghi hoặc,<br>        Thể nhập vào bất tử,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Người sống ở đời này<br>        Không nhiễm cả thiện ác,<br>        Không sầu, sạch không bụi<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Như trăng, sạch không uế<br>        Sáng trong và tịnh lặng,<br>        Hữu ái, được đoạn tận,<br>        Ta gọi Bà là môn.\""},
  {t:"\"Vượt đường nguy hiểm này,<br>        Nhiếp phục luân hồi, si,<br>        Ðến bờ kia thiền định<br>        Không dục ái, không nghi,<br>        Không chấp trước, tịch tịnh,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ai ở đời, đoạn dục,<br>        Bỏ nhà, sống xuất gia,<br>        Dục hữu được đoạn tận,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ai ở đời đoạn ái<br>        Bỏ nhà, sống xuất gia,<br>        Ái hữu được đoạn tận,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Bỏ trói buộc loài người,<br>        Vượt trói buộc cõi trời.<br>        Giải thoát mọi buộc ràng,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Bỏ điều ưa, điều ghét,<br>        Mát lạnh, diệt sanh y<br>        Bậc anh hùng chiến thắng,<br>        Nhiếp phục mọi thế giới,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ai hiểu rõ hoàn toàn<br>        Sanh tử các chúng sanh,<br>        Không nhiễm, khéo vượt qua,<br>        Sáng suốt chân giác ngộ,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Với ai, loài trời, người<br>        Cùng với Càn thát bà,<br>        Không biết chỗ thọ sanh<br>        Lậu tận bậc La hán.<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ai quá, hiện, vị lai<br>        Không một sở hữu gì,<br>        Không sở hữu không nắm,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Bậc trâu chúa, thù thắng<br>        Bậc anh hùng, đại sĩ,<br>        Bậc chiến thắng, không nhiễm,<br>        Bậc tẩy sạch, giác ngộ,<br>        Ta gọi Bà-la-môn.\""},
  {t:"\"Ai biết được đời trước,<br>        Thấy thiên giới, đọa xứ,<br>        Ðạt được sanh diệt tận<br>        Thắng trí, tự viên thành<br>        Bậc mâu ni đạo sĩ.<br>        Viên mãn mọi thành tựu<br>        Ta gọi Bà-la-môn.\""},
];
const BADGES = [
    // --- Log Counts (Effort/Viriya) ---
    { id: 'log_1', icon: 'fas fa-fingerprint', color: '#a29bfe', title: 'Vô Ngã', desc: 'Hoàn thành thời thiền đầu tiên', condition: (data) => data.logs.length >= 1 },
    { id: 'log_10', icon: 'fas fa-seedling', color: '#00b894', title: 'Duyên Khởi', desc: 'Hoàn thành 10 thời thiền', condition: (data) => data.logs.length >= 10 },
    { id: 'log_25', icon: 'fab fa-pagelines', color: '#55efc4', title: 'Thiện Căn', desc: 'Hoàn thành 25 thời thiền', condition: (data) => data.logs.length >= 25 },
    { id: 'log_50', icon: 'fas fa-leaf', color: '#fdcb6e', title: 'Thiện Pháp', desc: 'Hoàn thành 50 thời thiền', condition: (data) => data.logs.length >= 50 },
    { id: 'log_100', icon: 'fab fa-envira', color: '#00cec9', title: 'Thiện Nghiệp', desc: 'Hoàn thành 100 thời thiền', condition: (data) => data.logs.length >= 100 },
    { id: 'log_150', icon: 'fas fa-cloud-sun', color: '#ff7675', title: 'Ly Cấu', desc: 'Hoàn thành 150 thời thiền', condition: (data) => data.logs.length >= 150 },
    { id: 'log_200', icon: 'fas fa-rainbow', color: '#e056fd', title: 'Thiện Thú', desc: 'Hoàn thành 200 thời thiền', condition: (data) => data.logs.length >= 200 },
    { id: 'log_250', icon: 'fas fa-mountain', color: '#48dbfb', title: 'Núi Tuyết', desc: 'Hoàn thành 250 thời thiền', condition: (data) => data.logs.length >= 250 },
    { id: 'log_300', icon: 'fas fa-gopuram', color: '#fd79a8', title: 'Hướng Thượng', desc: 'Hoàn thành 300 thời thiền', condition: (data) => data.logs.length >= 300 },
    { id: 'log_350', icon: 'fas fa-vihara', color: '#ff9f43', title: 'An Trú', desc: 'Hoàn thành 350 thời thiền', condition: (data) => data.logs.length >= 350 },
    { id: 'log_400', icon: 'fas fa-archway', color: '#fab1a0', title: 'Cửa Bất Tử', desc: 'Hoàn thành 400 thời thiền', condition: (data) => data.logs.length >= 400 },
    { id: 'log_450', icon: 'fas fa-kaaba', color: '#74b9ff', title: 'Thạch Trụ', desc: 'Hoàn thành 450 thời thiền', condition: (data) => data.logs.length >= 450 },
    { id: 'log_500', icon: 'fas fa-monument', color: '#ffbe76', title: 'Bảo Tháp', desc: 'Hoàn thành 500 thời thiền', condition: (data) => data.logs.length >= 500 },
    { id: 'log_600', icon: 'fab fa-fort-awesome', color: '#a29bfe', title: 'Pháp Thành', desc: 'Hoàn thành 600 thời thiền', condition: (data) => data.logs.length >= 600 },
    { id: 'log_700', icon: 'fa-dungeon', color: '#6ab04c', title: 'Độc Cư', desc: 'Hoàn thành 700 thời thiền', condition: (data) => data.logs.length >= 700 },
    { id: 'log_800', icon: 'fab fa-d-and-d', color: '#eb4d4b', title: 'Long Tượng', desc: 'Hoàn thành 800 thời thiền', condition: (data) => data.logs.length >= 800 },
    { id: 'log_1000', icon: 'fas fa-dharmachakra', color: '#f9ca24', title: 'Chuyển Pháp Luân', desc: 'Hoàn thành 1000 thời thiền', condition: (data) => data.logs.length >= 1000 },

    { id: 'streak_3', icon: 'fas fa-shoe-prints', color: '#bdc3c7', title: 'Kinh Hành', desc: 'Hành trì 3 ngày liên tục', condition: (data) => data.streak >= 3 },
    { id: 'streak_5', icon: 'fas fa-bridge-water', color: '#48dbfb', title: 'Thánh Cầu', desc: 'Hành trì 5 ngày liên tục', condition: (data) => data.streak >= 5 },
    { id: 'streak_7', icon: 'fas fa-clover', color: '#2ecc71', title: 'Phước Báu', desc: 'Hành trì 7 ngày liên tục', condition: (data) => data.streak >= 7 },
    { id: 'streak_14', icon: 'fas fa-certificate', color: '#f1c40f', title: 'Phạm Hạnh', desc: 'Hành trì 14 ngày liên tục', condition: (data) => data.streak >= 14 },
    { id: 'streak_21', icon: 'fas fa-book-open-reader', color: '#e17055', title: 'Đa Văn', desc: 'Hành trì 21 ngày liên tục', condition: (data) => data.streak >= 21 },
    { id: 'streak_30', icon: 'fab fa-sketch', color: '#ff9f43', title: 'Như Ý Túc', desc: 'Hành trì 30 ngày liên tục', condition: (data) => data.streak >= 30 },
    { id: 'streak_49', icon: 'fab fa-jira', color: '#54a0ff', title: 'Tứ Niệm Xứ', desc: 'Hành trì 49 ngày liên tục', condition: (data) => data.streak >= 49 },
    { id: 'streak_60', icon: 'fas fa-link', color: '#a29bfe', title: 'Khổ Đế', desc: 'Hành trì 60 ngày liên tục', condition: (data) => data.streak >= 60 },
    { id: 'streak_90', icon: 'fab fa-brave', color: '#ff6b6b', title: 'Đại Hùng', desc: 'Hành trì 90 ngày liên tục', condition: (data) => data.streak >= 90 },
    { id: 'streak_100', icon: 'fab fa-brave-reverse', color: '#d63031', title: 'Sư Tử Hống', desc: 'Hành trì 100 ngày liên tục', condition: (data) => data.streak >= 100 },
    { id: 'streak_180', icon: 'fab fa-wolf-pack-battalion', color: '#81ecec', title: 'Ngưu Vương', desc: 'Hành trì 180 ngày liên tục', condition: (data) => data.streak >= 180 },
    { id: 'streak_365', icon: 'fas fa-infinity', color: '#0984e3', title: 'Vô Thủy', desc: 'Hành trì 365 ngày liên tục', condition: (data) => data.streak >= 365 },

 { id: 'time_1h', icon: 'fas fa-hourglass-empty', color: '#f1c40f', title: 'Sát Na', desc: 'Tích lũy 1 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 60 },
    { id: 'time_5h', icon: 'fas fa-circle-notch', color: '#ffbe76', title: 'Không Tánh', desc: 'Tích lũy 5 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 300 },
    { id: 'time_10h', icon: 'fas fa-record-vinyl', color: '#badc58', title: 'Chánh Niệm', desc: 'Tích lũy 10 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 600 },
    { id: 'time_20h', icon: 'fab fa-files-pinwheel', color: '#686de0', title: 'Chánh Nghiệp', desc: 'Tích lũy 20 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 1200 },
    { id: 'time_30h', icon: 'fas fa-snowflake', color: '#48dbfb', title: 'Tịch Tịnh', desc: 'Tích lũy 30 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 1800 },
    { id: 'time_50h', icon: 'fas fa-water', color: '#0abde3', title: 'Nhập Dòng', desc: 'Tích lũy 50 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 3000 },
    { id: 'time_80h', icon: 'fas fa-wind', color: '#c7ecee', title: 'Hơi Thở', desc: 'Tích lũy 80 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 4800 },
	{ id: 'time_100h', icon: 'fas fa-fire-burner', color: '#ee5253', title: 'Nhiệt Thành', desc: 'Tích lũy 100 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 6000 },
	    { id: 'time_250h', icon: 'fas fa-burn', color: '#f368e0', title: 'Nhiệt Tâm', desc: 'Tích lũy 150 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 9000 },
    { id: 'time_150h', icon: 'fas fa-fire', color: '#ff6b6b', title: 'Lửa Tuệ', desc: 'Tích lũy 200 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 12000 },
    { id: 'time_200h', icon: 'fas fa-fire-flame-curved', color: '#ff9f43', title: 'Lửa Thiền', desc: 'Tích lũy 250 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 15000 },
    { id: 'time_300h', icon: 'fas fa-bolt', color: '#feca57', title: 'Tuệ Căn', desc: 'Tích lũy 300 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 18000 },
    { id: 'time_400h', icon: 'fas fa-bolt-lightning', color: '#ff9ff3', title: 'Tuệ Lực', desc: 'Tích lũy 400 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 24000 },
    { id: 'time_500h', icon: 'fas fa-sun', color: '#ffaf40', title: 'Minh Kiến', desc: 'Tích lũy 500 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 30000 },
    { id: 'time_800h', icon: 'fas fa-moon', color: '#dfe6e9', title: 'Nhất Dạ Hiền', desc: 'Tích lũy 800 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 48000 },
    { id: 'time_1000h', icon: 'fab fa-skyatlas', color: '#74b9ff', title: 'Hư Không', desc: 'Tích lũy 1000 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 60000 },

    { id: 'sit_15', icon: 'fab fa-deskpro', color: '#48dbfb', title: 'Voi Chúa', desc: 'Thời thiền >= 15 phút', condition: (data) => data.logs.some(l => l.minutes >= 15) },
    { id: 'sit_30', icon: 'fab fa-medapps', color: '#feca57', title: 'Ngọn Đèn', desc: 'Thời thiền >= 30 phút', condition: (data) => data.logs.some(l => l.minutes >= 30) },
    { id: 'sit_45', icon: 'fas fa-hand-holding-hand', color: '#cd84f1', title: 'Từ Bi', desc: 'Thời thiền >= 45 phút', condition: (data) => data.logs.some(l => l.minutes >= 45) },
    { id: 'sit_60', icon: 'fas fa-gem', color: '#7d5fff', title: 'Định Tĩnh', desc: 'Thời thiền >= 60 phút', condition: (data) => data.logs.some(l => l.minutes >= 60) },
    { id: 'sit_90', icon: 'fab fa-ethereum', color: '#dfe6e9', title: 'Hỷ Tâm', desc: 'Thời thiền >= 90 phút', condition: (data) => data.logs.some(l => l.minutes >= 90) },
    { id: 'sit_120', icon: 'fas fa-anchor', color: '#ff9ff3', title: 'Pháp Trụ', desc: 'Thời thiền >= 2 giờ', condition: (data) => data.logs.some(l => l.minutes >= 120) },
    { id: 'sit_180', icon: 'fas fa-balance-scale', color: '#00d2d3', title: 'Buông Xả', desc: 'Thời thiền >= 3 giờ', condition: (data) => data.logs.some(l => l.minutes >= 180) },
    { id: 'sit_240', icon: 'fab fa-jedi-order', color: '#d980fa', title: 'Định Lực', desc: 'Thời thiền >= 4 giờ', condition: (data) => data.logs.some(l => l.minutes >= 240) },

   
    { id: 'mind_100', icon: 'fas fa-bullseye', color: '#ff7675', title: 'Nhất Tâm', desc: 'Ghi nhận được 100 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 100 },
    { id: 'mind_500', icon: 'fas fa-circle-half-stroke', color: '#dfe6e9', title: 'Thanh Tịnh', desc: 'Ghi nhận được 500 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 500 },
    { id: 'mind_1k', icon: 'fab fa-superpowers', color: '#f1c40f', title: 'Biết Đủ', desc: 'Ghi nhận được 1.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 1000 },
    { id: 'mind_2k', icon: 'fab fa-servicestack', color: '#74b9ff', title: 'Vượt Bộc Lưu', desc: 'Ghi nhận được 2.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 2000 },
    { id: 'mind_3k', icon: 'fas fa-layer-group', color: '#a29bfe', title: 'Ngũ Uẩn', desc: 'Ghi nhận được 3.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 3000 },
    { id: 'mind_4k', icon: 'fab fa-schlix', color: '#d980fa', title: 'Chánh Ngữ', desc: 'Ghi nhận được 4.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 4000 },
    { id: 'mind_5k', icon: 'fab fa-modx', color: '#81ecec', title: 'Biết Ơn', desc: 'Ghi nhận được 5.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 5000 },
    { id: 'mind_6k', icon: 'fab fa-fulcrum', color: '#55efc4', title: 'Ẩn Sĩ', desc: 'Ghi nhận được 6.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 6000 },
    { id: 'mind_7k', icon: 'fab fa-first-order', color: '#fab1a0', title: 'Sáu Xúc Xứ', desc: 'Ghi nhận được 7.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 7000 },
    { id: 'mind_8k', icon: 'fab fa-first-order-alt', color: '#e17055', title: 'Tàm Quý', desc: 'Ghi nhận được 8.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 8000 },
    { id: 'mind_10k', icon: 'fab fa-medrt', color: '#eb4d4b', title: 'Cúng Dường', desc: 'Ghi nhận được 10.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 10000 },
    { id: 'mind_15k', icon: 'fab fa-studiovinari', color: '#00cec9', title: 'Ly Dục', desc: 'Ghi nhận được 15.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 15000 },
    { id: 'mind_20k', icon: 'fab fa-connectdevelop', color: '#74b9ff', title: 'Trạch Pháp', desc: 'Ghi nhận được 20.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 20000 },
    { id: 'mind_25k', icon: 'fab fa-linktree', color: '#00b894', title: 'Vô Ưu', desc: 'Ghi nhận được 25.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 25000 },
    { id: 'mind_30k', icon: 'fas fa-hexagon-nodes', color: '#e056fd', title: 'Tuệ Quán', desc: 'Ghi nhận được 30.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 30000 },
    { id: 'mind_40k', icon: 'fab fa-slack', color: '#ff7675', title: 'Giới Hạnh', desc: 'Ghi nhận được 40.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 40000 },
    { id: 'mind_50k', icon: 'fab fa-hornbill', color: '#feca57', title: 'An Lạc', desc: 'Ghi nhận được 50.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 50000 },
    { id: 'mind_80k', icon: 'fas fa-dragon', color: '#d63031', title: 'Nhiếp Phục', desc: 'Ghi nhận được 80.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 80000 },
    { id: 'mind_100k', icon: 'fas fa-om', color: '#f9ca24', title: 'Chân Như', desc: 'Ghi nhận được 100.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 100000 },

    // --- DAILY MINDFULNESS (Intensity) ---
    { id: 'mindf_200', icon: 'fab fa-linode', color: '#48dbfb', title: 'Trung Đạo', desc: 'Ghi nhận > 200 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 200); }},
    { id: 'mindf_400', icon: 'fab fa-shoelace', color: '#a29bfe', title: 'Kham Nhẫn', desc: 'Ghi nhận > 400 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 400); }},
    { id: 'mindf_600', icon: 'fas fa-people-roof', color: '#f1c40f', title: 'Hoà Hợp', desc: 'Ghi nhận > 600 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 600); }},
    { id: 'mindf_1000', icon: 'fas fa-user-shield', color: '#686de0', title: 'Tự Điều Phục', desc: 'Ghi nhận > 1000 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 1000); }},

   
	

    // --- QUALITY (Qualities/Phẩm Chất) ---
    { id: 'qual_5_min', icon: 'fas fa-feather-pointed', color: '#81ecec', title: 'Khinh An', desc: 'Đạt được > 5 chánh niệm/phút (thời >10p)', condition: (data) => data.logs.some(l => l.minutes >= 10 && (l.count/l.minutes) >= 5) },
    { id: 'qual_6_min', icon: 'fas fa-shield-alt', color: '#badc58', title: 'Phòng Hộ', desc: 'Đạt được > 6 chánh niệm/phút (thời >10p)', condition: (data) => data.logs.some(l => l.minutes >= 10 && (l.count/l.minutes) >= 6) },
    { id: 'qual_7_min', icon: 'fas fa-bahai', color: '#ffeaa7', title: 'Thất Giác Chi', desc: 'Đạt được > 7 chánh niệm/phút (thời >10p)', condition: (data) => data.logs.some(l => l.minutes >= 10 && (l.count/l.minutes) >= 7) },
    { id: 'qual_8_min', icon: 'fas fa-life-ring', color: '#fab1a0', title: 'Bát Chánh Đạo', desc: 'Đạt được > 8 chánh niệm/phút (thời >10p)', condition: (data) => data.logs.some(l => l.minutes >= 10 && (l.count/l.minutes) >= 8) },
    { id: 'qual_9_min', icon: 'fab fa-debian', color: '#e17055', title: 'Nghiệp', desc: 'Đạt được > 9 chánh niệm/phút (thời >10p)', condition: (data) => data.logs.some(l => l.minutes >= 10 && (l.count/l.minutes) >= 9) },
    { id: 'qual_10_min', icon: 'fas fa-hands-holding-circle', color: '#ff7675', title: 'Bố Thí', desc: 'Đạt được > 10 chánh niệm/phút (thời >10p)', condition: (data) => data.logs.some(l => l.minutes >= 10 && (l.count/l.minutes) >= 10) },
    { id: 'qual_12_min', icon: 'fas fa-ranking-star', color: '#f9ca24', title: 'Diệu Pháp', desc: 'Đạt được > 12 chánh niệm/phút (thời >10p)', condition: (data) => data.logs.some(l => l.minutes >= 10 && (l.count/l.minutes) >= 12) },

    // --- FOCUS SCORES (Samadhi Levels) ---
    
		
		

	
	
    { id: 'focus_1_5', icon: 'fab fa-free-code-camp', color: '#ff7979', title: 'Chánh Cần', desc: 'Mức chú tâm TB > 1.5 trong phiên <= 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 1.5; }) },
    { id: 'focus_2_0', icon: 'fab fa-react', color: '#7ed6df', title: 'Danh Sắc', desc: 'Mức chú tâm TB > 2 trong phiên <= 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.0; }) },
    { id: 'focus_2_5', icon: 'fa-meteor', color: '#badc58', title: 'Tấn Lực', desc: 'Mức chú tâm TB > 2.5 trong phiên <= 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.5; }) },
    { id: 'focus_3_0', icon: 'fas fa-jedi', color: '#e056fd', title: 'Chiến Sĩ', desc: 'Mức chú tâm TB > 3 trong phiên <= 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.0; }) },
	{ id: 'focus_3_5', icon: 'fas fa-hanukiah', color: '#f9ca24', title: 'Không Phóng Dật', desc: 'Mức chú tâm TB > 3.5 trong phiên <= 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if (proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.5; }) },

	{ id: 'sfocus_2', icon: 'fas fa-globe-asia', color: '#22a6b3', title: 'Hải Đảo', desc: 'Mức chú tâm TB > 2 trong phiên >= 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.0; }) },
	{ id: 'sfocus_2_5', icon: 'fab fa-drupal', color: '#2ed573', title: 'Tu Tập', desc: 'Mức chú tâm TB > 2.5 trong phiên >= 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.5; }) },
    { id: 'sfocus_3', icon: 'fa-spa', color: '#6c5ce7', title: 'Thiền Tịnh', desc: 'Mức chú tâm TB > 2.5 trong phiên >= 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.0; }) },
	{ id: 'sfocus_3_5', icon: 'fas fa-dove', color: '#dfe6e9', title: 'Vô Lậu', desc: 'Mức chú tâm TB > 3.5 trong phiên >= 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.5; }) },


{ id: 'note_long', icon: 'fa-pen-nib', color: '#ff9f43', title: 'Học Giới', desc: 'Viết ghi chú dài hơn 50 ký tự', condition: (data) => data.logs.some(l => l.notes && l.notes.length > 50) },
    { id: 'note_many', icon: 'fa-scroll', color: '#a29bfe', title: 'Thừa Tự Pháp', desc: 'Có 50 thời thiền đi kèm ghi chú > 50 ký tự', condition: (data) => data.logs.filter(l => l.notes && l.notes.length > 100).length >= 50 },
    // --- MISC / SPECIAL ---
	{ id: 'goal-early_4am', icon: 'fas fa-star-half-stroke', color: '#ff6b6b', title: 'Sao Mai', desc: 'Hoàn thành thời thiền trước 4:00 sáng', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() < 4) },
    { id: 'goal-early_5am', icon: 'fab fa-tidal', color: '#7ed6df', title: 'Tứ Diệu Đế', desc: 'Hoàn thành thời thiền trước 5:00 sáng', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() < 5) },
    { id: 'goal-early_3d', icon: 'fas fa-star', color: '#ffbe76', title: 'Ước Nguyện', desc: '3 ngày liên tiếp thiền trước 5:00 sáng', condition: (data) => { const earlyLogs = data.logs.filter(l => new Date(l.timestamp).getHours() < 5).map(l => l.date); const uniqueDays = [...new Set(earlyLogs)].sort(); let streak = 0; for(let i=0; i<uniqueDays.length-1; i++) { const d1 = new Date(uniqueDays[i]); const d2 = new Date(uniqueDays[i+1]); if ((d2-d1) <= 86400000) streak++; else streak = 0; if(streak >= 2) return true; } return false; }},
	{ id: 'goal-early_7d', icon: 'fa-ribbon', color: '#2ecc71', title: 'Cứu Cánh', desc: '7 ngày liên tiếp thiền trước 5:00 sáng', condition: (data) => { const earlyLogs = data.logs.filter(l => new Date(l.timestamp).getHours() < 5).map(l => l.date); const uniqueDays = [...new Set(earlyLogs)].sort(); let streak = 0; for(let i=0; i<uniqueDays.length-1; i++) { const d1 = new Date(uniqueDays[i]); const d2 = new Date(uniqueDays[i+1]); if ((d2-d1) <= 86400000) streak++; else streak = 0; if(streak >= 6) return true; } return false; }},
    { id: 'lunch', icon: 'fab fa-viadeo', color: '#badc58', title: 'Quả Tuệ', desc: 'Thiền vào giờ nghỉ trưa (11h-13h)', condition: (data) => data.logs.some(l => { const h = new Date(l.timestamp).getHours(); return h >= 11 && h <= 13; }) },
    { id: 'goal-evening', icon: 'fas fa-cloud-showers-heavy', color: '#0984e3', title: 'Mùa An Cư', desc: 'Thiền vào chiều tối (17h-19h)', condition: (data) => data.logs.some(l => { const h = new Date(l.timestamp).getHours(); return h >= 17 && h <= 19; }) },
    { id: 'goal-night', icon: 'fab fa-squarespace', color: '#a29bfe', title: 'Nhân Duyên', desc: 'Thiền sau 22:00 đêm', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() >= 22) },
	 { id: 'goal_100', icon: 'fab fa-think-peaks', color: '#f9ca24', title: 'Viễn Ly', desc: 'Thành tựu 100% 1 mục tiêu thiền', condition: (data) => data.goals.some(g => { const target = g.type === 'meditation' ? g.totalMindfulness : g.totalMinutes; return g.lifetimeTargetMinutes > 0 && target >= g.lifetimeTargetMinutes; }) },
    { id: 'goal_80', icon: 'fas fa-heart', color: '#ff7675', title: 'Tâm Từ', desc: 'Thành tựu 80% mục tiêu thiền', condition: (data) => data.goals.some(g => { const target = g.type === 'meditation' ? g.totalMindfulness : g.totalMinutes; return g.lifetimeTargetMinutes > 0 && target >= (g.lifetimeTargetMinutes / 2); }) },
    
	
	 { id: 'daily_volume_30p', icon: 'fab fa-canadian-maple-leaf', color: '#e58e26', title: 'Vô Thường', desc: 'Tổng thời gian thiền > 30 phút trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 30); }},
    { id: 'daily_volume_1h', icon: 'fab fa-phoenix-framework', color: '#fa983a', title: 'Chế Ngự', desc: 'Tổng thời gian thiền > 1 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 60); }},
    { id: 'daily_volume_2h', icon: 'fab fa-phoenix-squadron', color: '#eb2f06', title: 'Bất Tử', desc: 'Tổng thời gian thiền > 2 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 120); }},
    { id: 'daily_volume_3h', icon: 'fab fa-gripfire', color: '#e55039', title: 'Tinh Cần', desc: 'Tổng thời gian thiền > 3 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 180); }},
    { id: 'daily_volume_4h', icon: 'fab fa-rebel', color: '#74b9ff', title: 'Bất Hại', desc: 'Tổng thời gian thiền > 4 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 240); }},
    { id: 'daily_volume_5h', icon: 'fab fa-sith', color: '#badc58', title: 'Tỉnh Giác', desc: 'Tổng thời gian thiền > 5 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 300); }},
    { id: 'daily_volume_8h', icon: 'fab fa-battle-net', color: '#6a89cc', title: 'Như lý Tác Ý', desc: 'Tổng thời gian thiền > 8 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 480); }},
    { id: 'freq_3_day', icon: 'fas fa-users', color: '#f0932b', title: 'Tăng Bảo', desc: 'Thiền 3 lần trong một ngày', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 3); }},
    { id: 'freq_5_day', icon: 'fas fa-hand-sparkles', color: '#48dbfb', title: 'Ngũ Giới', desc: 'Thiền 5 lần trong một ngày', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 5); }},
    { id: 'freq_10_day', icon: 'fas fa-hands-praying', color: '#ffbe76', title: 'Tịnh Tín', desc: 'Thiền 10 lần trong một ngày', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 5); }},
    { id: 'dedicated_day', icon: 'fa-landmark', color: '#2ecc71', title: 'Tam Bảo', desc: 'Thực hiện 3 thời thiền riêng biệt > 30p trong ngày', condition: (data) => { const goodLogs = data.logs.filter(l => l.minutes >= 15); const counts = {}; goodLogs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 3); }},
    { id: 'quick_fix', icon: 'fas fa-user-plus', color: '#f6e58d', title: 'Tự Thắng', desc: 'Hoàn thành 10 phiên ngắn (<10p)', condition: (data) => data.logs.filter(l => l.minutes < 10).length >= 10 },
	{ id: 'quick_fix2', icon: 'fa-fan', color: '#a29bfe', title: 'Quán Bất Tịnh', desc: 'Hoàn thành 30 phiên ngắn (<10p)', condition: (data) => data.logs.filter(l => l.minutes < 10).length >= 30 },
    { id: 'long_haul', icon: 'fa-tree', color: '#badc58', title: 'Kiên Trì', desc: 'Hoàn thành 10 phiên dài (>60p)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 10 },
    { id: 'long_haul2', icon: 'fab fa-watchman-monitoring', color: '#ff6b6b', title: 'Hải Đăng', desc: 'Hoàn thành 20 phiên dài (>60p)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 20 },
    { id: 'long_haul3', icon: 'fab fa-codepen', color: '#55efc4', title: 'Ly Sân', desc: 'Hoàn thành 50 phiên dài (>60p)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 50 },
{ id: 'overachiever', icon: 'fa-sailboat', color: '#74b9ff', title: 'Hiền Thiện', desc: 'Hoàn thành 200% mục tiêu ngày', condition: (data) => { return data.goals.some(g => { if(!g.dailyMinMedTarget) return false; const todayStr = new Date().toISOString().split('T')[0]; const todayVal = data.logs.filter(l => l.goalId === g.id && l.date === todayStr).reduce((s,l)=>s+(g.type==='meditation'? (l.count||0) : l.minutes), 0); return todayVal >= (g.dailyMinMedTarget * 2); }); }},
    
   
];
const DB_CONFIG = {
    name: 'HanhGiaDB',
    version: 2, 
    stores: {
        goals: 'id',
        logs: 'timestamp',
        meta: 'key'
    }
};

const dbHelper = {
    db: null,
    
    open() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_CONFIG.name, DB_CONFIG.version);
            
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                const tx = e.target.transaction;

                if (!db.objectStoreNames.contains('goals')) db.createObjectStore('goals', { keyPath: 'id' });
                if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
                
                let logStore;
                if (!db.objectStoreNames.contains('logs')) {
                    logStore = db.createObjectStore('logs', { keyPath: 'timestamp' });
                } else {
                    logStore = tx.objectStore('logs');
                }

                if (!logStore.indexNames.contains('goalId')) {
                    logStore.createIndex('goalId', 'goalId', { unique: false });
                }
            };

            req.onsuccess = (e) => {
                this.db = e.target.result;
                resolve(this.db);
            };
            req.onerror = (e) => reject("DB Error: " + e.target.error);
        });
    },

    async deleteLog(timestamp) {
        if (!this.db) await this.open();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['logs'], 'readwrite');
            const store = tx.objectStore('logs');
            store.delete(Number(timestamp)); 
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    },

    async deleteGoalData(goalId) {
        if (!this.db) await this.open();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs'], 'readwrite');
            
            const goalStore = tx.objectStore('goals');
            goalStore.delete(goalId);

            const logStore = tx.objectStore('logs');
            
            try {
                const index = logStore.index('goalId');
                const req = index.openKeyCursor(IDBKeyRange.only(goalId));

                req.onsuccess = (e) => {
                    const cursor = e.target.result;
                    if (cursor) {
                        logStore.delete(cursor.primaryKey);
                        cursor.continue();
                    }
                };
            } catch (err) {
                console.warn("Index missing, falling back to slow delete", err);
                const req = logStore.openCursor();
                req.onsuccess = (e) => {
                    const cursor = e.target.result;
                    if (cursor) {
                        if (cursor.value.goalId === goalId) cursor.delete();
                        cursor.continue();
                    }
                };
            }

            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    },

    async saveAll(data) {
        if (!this.db) await this.open();
        
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs', 'meta'], 'readwrite');
            
            const goalStore = tx.objectStore('goals');
            data.goals.forEach(g => goalStore.put(g));
            
            const logStore = tx.objectStore('logs');
            data.logs.forEach(l => logStore.put(l));
            
            const metaStore = tx.objectStore('meta');
            metaStore.put({ key: 'xp', value: data.xp });
            metaStore.put({ key: 'streak', value: data.streak });
            metaStore.put({ key: 'achievements', value: data.achievements });
            metaStore.put({ key: 'medSettings', value: data.medSettings });
			metaStore.put({ key: 'activeBadge', value: data.activeBadge });
            
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    },

    async loadAll() {
        if (!this.db) await this.open();

        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs', 'meta'], 'readonly');
            const data = { goals: [], logs: [], xp: 0, streak: 0, achievements: [], medSettings: {} };
            
            const getAll = (storeName) => {
                return new Promise((res, rej) => {
                    const req = tx.objectStore(storeName).getAll();
                    req.onsuccess = () => res(req.result);
                    req.onerror = () => rej(req.error);
                });
            };

            Promise.all([getAll('goals'), getAll('logs'), getAll('meta')])
                .then(([goals, logs, metaItems]) => {
                    data.goals = goals || [];
                    data.logs = logs || [];
                    
                    metaItems.forEach(item => {
                        if (item.key === 'xp') data.xp = item.value;
                        if (item.key === 'streak') data.streak = item.value;
                        if (item.key === 'achievements') data.achievements = item.value;
                        if (item.key === 'medSettings') data.medSettings = item.value;
						if (item.key === 'activeBadge') data.activeBadge = item.value;
                    });
                    resolve(data);
                })
                .catch(reject);
        });
    },

    async isEmpty() {
        if (!this.db) await this.open();
        return new Promise(resolve => {
            const tx = this.db.transaction(['meta'], 'readonly');
            const req = tx.objectStore('meta').count();
            req.onsuccess = () => resolve(req.result === 0);
        });
    }
};

        Chart.defaults.color = '#9ca3af';
        Chart.defaults.borderColor = '#374151';

        class GoalTracker {
            constructor() {
                this.data = {
                    goals: [],
                    logs: [],
                    xp: 0,
                    streak: 0,
                    achievements: [],
                    medSettings: { mode: 'tap', holdDuration: 400, tapRequired: 1, vibration: true }
                };

                // Other initializations remain the same
                this.tapState = { count: 0, lastTapTime: 0, timer: null };
                this.timers = {}; 
                this.today = new Date();
                this.currentMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1); 
                this.currentWeekStart = this.getStartOfWeek(this.today); 
                this.charts = { weekly: null, breakdown: null, monthly: null, dayChart: null, session: null };
                this.reportMode = 'time';
                this.meditationState = {
                    active: false, paused: false, goalId: null, count: 0,
                    startTime: null, timerRef: null, remainingSeconds: 0,
                    totalDurationSeconds: 0, touches: [] 
                };
                this.currentViewDate = null; 
                this.dayChartMode = 'time'; 
                
                // Define quick tags...
                this.QUICK_TAGS = [
                    'Tỉnh Thức', 'Định Tĩnh', 'An Lạc', 'Hỷ Lạc', 
                    'Khinh An', 'Thư Thái', 'Sáng Suốt', 'Rỗng Rang', 'Định Sâu', 
                    'Xả Ly', 'Biết Ơn', 'Nhẹ Nhàng', 'Ánh Sáng',
                    'Phóng Tâm', 'Vọng Tưởng', 'Trạo Cử', 'Hôn Trầm', 'Buồn Ngủ', 
                    'Thụy Miên', 'Tâm Tán Loạn', 'Lo Lắng', 'Sân Giận', 'Tham Ái',
                    'Hoài Nghi', 'Nhiều Toan Tính', 'Hồi Tưởng', 'Căng Thẳng',
                    'Đau Lưng', 'Tê Chân', 'Ngứa', 'Mỏi Cổ', 'Nóng Nực', 'Lạnh'
                ];

                this.init();
            }
			
			 async init() {
    try {
        await dbHelper.open();

        const dbData = await dbHelper.loadAll();
        if (dbData) {
            this.data = { ...this.data, ...dbData };
        }

       if (!this.data.medSettings || !this.data.medSettings.mode) {
    this.data.medSettings = { 
        mode: 'tap', 
        holdDuration: 400, 
        tapRequired: 1, 
        vibration: true,
        confirmMode: false,     
        confirmProbability: 100      
    };
}
if (typeof this.data.medSettings.confirmProbability === 'undefined') {
    this.data.medSettings.confirmProbability = 100; // Mặc định 100%
}
        
        if (this.data.medSettings.proMode === true) {
            this.data.medSettings.mode = 'pro';
            delete this.data.medSettings.proMode; 
        }

        this.data.goals.forEach(goal => {
            if (!goal.type) goal.type = 'standard'; 
            if (!goal.sessionTargetSeconds) goal.sessionTargetSeconds = 0;
            if (!goal.remainingSeconds) goal.remainingSeconds = 0;
            if (typeof goal.dailyTargetMinutes === 'undefined') goal.dailyTargetMinutes = 30;
            if (goal.type === 'meditation' && !goal.currentMindfulness) goal.currentMindfulness = 0;
            if (goal.type === 'meditation' && !goal.totalMindfulness) goal.totalMindfulness = 0;
        });

        this.analyticsGoalFilter = localStorage.getItem('anaGoalFilter') || 'all';
        this.renderDate();
        this.renderGoals();
        this.updateStats();
        this.checkAchievements();
        this.renderCalendar();
        this.loadActiveBadge();
        setInterval(() => this.updateTimerUI(), 1000);
        this.setupMeditationListeners();

    } catch (err) {
        console.error("Lỗi khởi tạo:", err);
        this.showToast("Lỗi tải dữ liệu!");
    }
    
    if (!localStorage.getItem('intro_seen')) {
        this.openIntroModal();
    }
}
hexToRgba(hex, alpha) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    return `rgba(156, 163, 175, ${alpha})`; // Fallback gray
}
setupMeditationListeners() {
                const medOverlay = document.getElementById('meditation-overlay');
                const counterEl = document.getElementById('med-counter');
                let pressTimer = null;
                
                if (medOverlay) {
                     medOverlay.addEventListener('pointerdown', (e) => {
                        if (e.target.closest('.med-controls') || e.target.closest('.modal')) return;
                        e.preventDefault(); 
                        const settings = this.data.medSettings;
                        const mode = settings.mode;
                        this.holdTriggered = false; 
                        counterEl.style.transform = "scale(0.9)";
                        counterEl.style.transition = "transform 0.1s";
                        if (mode === 'hold' || mode === 'auto' || mode === 'pro') {
                            pressTimer = setTimeout(() => {
                               
                                if (mode === 'pro') { 
                                    this.triggerMindfulnessSuccess(2); 
                                } else { 
                                    this.triggerMindfulnessSuccess(1); 
                                }
                                this.holdTriggered = true; 
                                pressTimer = null; 
                            }, settings.holdDuration);
                        } 
                    });

                    const handleRelease = (e) => {
                        if (e.target.closest('.med-controls')) return;
                        const settings = this.data.medSettings;
                        const mode = settings.mode;
                        if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
                        counterEl.style.transform = "scale(1)";
                        if (this.holdTriggered) {
                            this.holdTriggered = false;
                            this.tapState.count = 0;
                            return;
                        }
                        if (mode === 'tap' || mode === 'auto' || mode === 'pro') {
                            if (this.tapState.timer) clearTimeout(this.tapState.timer);
                            this.tapState.count++;
                            counterEl.style.transform = "scale(0.95)";
                            setTimeout(() => counterEl.style.transform = "scale(1)", 80);
                            if (mode === 'auto' || mode === 'pro') {
                                this.tapState.timer = setTimeout(() => {
                                    const taps = this.tapState.count;
                                    let qualityVal = 1; 
                                    if (mode === 'pro') {
                                        if (taps === 1) qualityVal = 4;      
                                        else if (taps === 2) qualityVal = 3; 
                                        else qualityVal = 3; 
                                    } 
                                    this.triggerMindfulnessSuccess(qualityVal);
                                    this.tapState.count = 0; 
                                }, 400); 
                            } else if (mode === 'tap') {
                                if (this.tapState.count >= settings.tapRequired) {
                                    this.triggerMindfulnessSuccess(1);
                                    this.tapState.count = 0; 
                                } else {
                                    this.tapState.timer = setTimeout(() => {
                                        this.tapState.count = 0;
                                    }, 400);
                                }
                            }
                        }
                    };
                    medOverlay.addEventListener('pointerup', handleRelease);
                    medOverlay.addEventListener('pointerleave', () => {
                        if(pressTimer) clearTimeout(pressTimer);
                        counterEl.style.transform = "scale(1)";
                        this.holdTriggered = false;
                    });
                }
            }
openIntroModal() {
        const modal = document.getElementById('intro-modal');
        if (modal) modal.style.display = 'flex';
    }

closeIntroModal() {
    document.getElementById('intro-modal').style.display = 'none';
    localStorage.setItem('intro_seen', 'true'); 
}

renderQuickTags(containerId, inputId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = ''; 
    
    this.QUICK_TAGS.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'quick-tag';
        span.innerText = tag;
        
        span.onclick = () => {
            const input = document.getElementById(inputId);

            if (input.value.trim().length > 0) {

                if(!input.value.includes(tag)) {
                    input.value += ', ' + tag;
                }
            } else {
                input.value = tag;
            }
        };
        
        container.appendChild(span);
    });
}

            getStartOfWeek(date) {
                const d = new Date(date);
                const day = d.getDay() || 7; 
                const diff = d.getDate() - day + 1; 
                return new Date(d.getFullYear(), d.getMonth(), diff);
            }
changeProWeek(dir) { 
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + (dir * 7)); 
    this.renderProAnalytics(); 
}

changeProMonth(dir) { 
    this.currentMonth.setMonth(this.currentMonth.getMonth() + dir); 
    this.renderProAnalytics(); 
}
getTouchTimestamp(t, startTime) {
    if (typeof t === 'object' && t !== null) {
        if (t.d !== undefined) return startTime + t.d; 
        if (t.t !== undefined) return t.t;             
    }
    
    if (typeof t === 'number') {
        if (t > 1000000000000) {
            return t; 
        }
        return startTime + t;
    }
    
    return 0;
}

analyzeSingleSession(log) {
    const totalSec = log.minutes * 60;
    if (totalSec === 0) return { distractedSec: 0, qualityPct: 0 };
    const thresholdSec = log.threshold || 10;

    const calculatePenalty = (gap) => {
        if (gap <= thresholdSec) return 0;
        
        const overage = gap - thresholdSec;
        const heavyPenalty = gap - (thresholdSec / 2);
        
        if (overage <= 3) {
            
            const progress = overage / 3; 
            return heavyPenalty * progress;
        }
        
        return heavyPenalty;
    };

    if (log.touches && log.touches.length >= 1) {
        const timestamps = log.touches
            .map(t => this.getTouchTimestamp(t, log.timestamp))
            .sort((a, b) => a - b);

        let distractedSec = 0;

        const startGap = (timestamps[0] - log.timestamp) / 1000;
        distractedSec += calculatePenalty(startGap);

        for (let i = 1; i < timestamps.length; i++) {
            const gap = (timestamps[i] - timestamps[i - 1]) / 1000;
            distractedSec += calculatePenalty(gap);
        }

        const endTime = log.timestamp + (log.minutes * 60 * 1000);
        const endGap = (endTime - timestamps[timestamps.length - 1]) / 1000;
        distractedSec += calculatePenalty(endGap);

        distractedSec = Math.min(distractedSec, totalSec);
        const qualityPct = Math.max(0, ((totalSec - distractedSec) / totalSec) * 100);
        
        return { 
            distractedSec: parseFloat(distractedSec.toFixed(1)), 
            qualityPct: parseFloat(qualityPct.toFixed(1)) 
        };
    } 
    else {
        const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        let mindfulSec = count * thresholdSec;
        mindfulSec = Math.min(mindfulSec, totalSec);
        return { 
            distractedSec: totalSec - mindfulSec, 
            qualityPct: parseFloat(((mindfulSec / totalSec) * 100).toFixed(1)) 
        };
    }
}
renderAnalytics(saveState = false) {
    const range = parseInt(document.getElementById('ana-time-range').value) || 3;
    const ctxTrend = document.getElementById('analyticsTrendChart').getContext('2d');
    const goalSelect = document.getElementById('ana-goal-select');

    if (saveState) {
        this.analyticsGoalFilter = goalSelect.value;
        localStorage.setItem('anaGoalFilter', this.analyticsGoalFilter);
    }

    const medGoals = this.data.goals.filter(g => g.type === 'meditation');

    goalSelect.innerHTML = '<option value="all">Tất cả thời thiền</option>';
    medGoals.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.id;
        opt.innerText = g.name;
        goalSelect.appendChild(opt);
    });

    const goalExists = this.analyticsGoalFilter === 'all' || medGoals.some(g => g.id === this.analyticsGoalFilter);
    if (!goalExists) {
        this.analyticsGoalFilter = 'all';
        localStorage.setItem('anaGoalFilter', 'all');
    }
    goalSelect.value = this.analyticsGoalFilter;

    let targetGoalIds = [];
    if (this.analyticsGoalFilter === 'all') {
        targetGoalIds = medGoals.map(g => g.id);
    } else {
        targetGoalIds = [this.analyticsGoalFilter];
    }

    if (targetGoalIds.length === 0) {
        document.getElementById('ana-comparison-table').innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px;">Chưa có mục tiêu thiền nào.</td></tr>';
        return;
    }

    const now = Date.now();
    const cutoff = now - (range * 24 * 60 * 60 * 1000);
    
    const logs = this.data.logs
        .filter(l => targetGoalIds.includes(l.goalId) && l.timestamp >= cutoff)
        .sort((a, b) => a.timestamp - b.timestamp);

    if (logs.length === 0) {
        if(this.charts.analyticsTrend) this.charts.analyticsTrend.destroy();
        if(this.charts.hourlyChart) this.charts.hourlyChart.destroy();
        document.getElementById('ana-avg-quality').innerText = "---";
        document.getElementById('ana-avg-density').innerText = "---";
        document.getElementById('ana-total-mindful').innerText = "---";
        document.getElementById('ana-comparison-table').innerHTML = '<tr><td colspan="5" style="padding:20px; text-align:center;">Chưa có dữ liệu trong khoảng thời gian này.</td></tr>';
        return;
    }

    let totalTimeSec = 0;
    let totalDistractedSec = 0;
    let totalTouches = 0;
    
    // 1. Map data and include raw timestamp for calculation
    const sessionData = logs.map(log => {
        const result = this.analyzeSingleSession(log);
        
        totalTimeSec += log.minutes * 60;
        totalDistractedSec += result.distractedSec;
        const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        totalTouches += count;
        const d = new Date(log.timestamp);
        const timeStr = d.getHours().toString().padStart(2, '0') + ':' + 
                        d.getMinutes().toString().padStart(2, '0');
        const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                        (d.getMonth() + 1).toString().padStart(2, '0') + '/' + 
                        d.getFullYear();
        
        return {
            timestamp: log.timestamp, // Keep raw timestamp for bucketing
            date: d.toLocaleDateString('vi-VN', {day: '2-digit', month:'2-digit'}),
            fullDateTime: `${timeStr}, ${dateStr}`,
            quality: result.qualityPct,
            density: log.minutes > 0 ? (count / log.minutes).toFixed(1) : 0
        };
    });

    const avgQuality = totalTimeSec > 0 ? ((1 - (totalDistractedSec / totalTimeSec)) * 100).toFixed(1) : 0;
    const avgDensity = totalTimeSec > 0 ? (totalTouches / (totalTimeSec / 60)).toFixed(1) : 0;
    const mindfulSeconds = Math.max(0, totalTimeSec - totalDistractedSec);
    const mindfulHours = (mindfulSeconds / 3600).toFixed(1);
    
    document.getElementById('ana-avg-quality').innerText = `${avgQuality}%`;
    document.getElementById('ana-avg-density').innerText = avgDensity;
    document.getElementById('ana-total-mindful').innerText = `${mindfulHours}h`;

    if (this.charts.analyticsTrend) this.charts.analyticsTrend.destroy();

    // 2. Trend Chart Logic with Time-Window Averaging
    let chartData = sessionData;
    const maxPoints = 30;

    if (sessionData.length > maxPoints) {
        chartData = [];
        // Determine the total time span of the visible data
        const startTime = sessionData[0].timestamp;
        const endTime = sessionData[sessionData.length - 1].timestamp;
        const totalDuration = endTime - startTime;
        
        // Calculate the time step for each point
        const step = totalDuration / maxPoints;

        for (let i = 0; i < maxPoints; i++) {
            const bucketStart = startTime + (i * step);
            const bucketEnd = bucketStart + step;

            // Find all logs that fall into this time bucket
            const bucketLogs = sessionData.filter(d => 
                d.timestamp >= bucketStart && d.timestamp < bucketEnd
            );

            // Edge case: Ensure the very last log is included in the last bucket
            if (i === maxPoints - 1) {
                const lastLog = sessionData[sessionData.length - 1];
                if (!bucketLogs.includes(lastLog)) bucketLogs.push(lastLog);
            }

            if (bucketLogs.length > 0) {
                // Calculate Average Quality for this time frame
                const totalQ = bucketLogs.reduce((sum, item) => sum + item.quality, 0);
                const avgQ = totalQ / bucketLogs.length;

                // Create label based on the bucket start time
                const d = new Date(bucketStart);
                const timeStr = d.getHours().toString().padStart(2, '0') + ':' + 
                                d.getMinutes().toString().padStart(2, '0');
                const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                                (d.getMonth() + 1).toString().padStart(2, '0');

                chartData.push({
                    date: dateStr,
                    fullDateTime: `${dateStr} (TB ${bucketLogs.length} thời)`, // Indication of averaging
                    quality: parseFloat(avgQ.toFixed(1)),
                    timestamp: bucketStart
                });
            }
        }
    }

    this.charts.analyticsTrend = new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: chartData.map(d => d.date),
            datasets: [
                {
                    label: 'Chất lượng chánh niệm (%)',
                    data: chartData.map(d => d.quality),
                    borderColor: '#34d399',
                    backgroundColor: 'rgba(52, 211, 153, 0.1)',
                    yAxisID: 'y',
                    fill: true,
                    tension: 0.3
                },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: true
            },
            elements: {
                point: {
                    hitRadius: 30,     
                    hoverRadius: 4     
                }
            },
            plugins: {
                legend: { display: true, labels: { font: {size: 11}} },             
                tooltip: {
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        title: function(context) {
                            return chartData[context[0].dataIndex].fullDateTime;
                        },
                        label: function(context) {
                // 1. Get the original label from the dataset (e.g., "Chất lượng trung bình")
                let label = context.dataset.label || '';

                // 2. Override the text ONLY for the tooltip display
                if (label === 'Chất lượng chánh niệm (%)') {
                    label = 'Chất lượng';
                }

                // 3. Construct the final string
                if (label) {
                    label += ': ';
                }
                
                if (context.parsed.y !== null) {
                    label += context.parsed.y;

                    // 4. Add the % sign if it corresponds to the quality dataset
                    if (context.dataset.label === 'Chất lượng chánh niệm (%)') {
                        label += '%';
                    }
                }
                return label;
            },
                        labelColor: function(context) {
                            return {
                                borderColor: context.dataset.borderColor,
                                backgroundColor: context.dataset.borderColor,
                                borderWidth: 0,
                                borderRadius: 2,
                            };
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear', display: true, position: 'right', min: 0, max: 100,
                    grid: { color: '#374151' }, ticks: { color: '#9ca3af', font: { size: 10 }, callback: function(value) {
                return value + '%';
            } },
                },
				y1: {
        type: 'linear',
        display: true,
        position: 'left', 
        min: 0,
        max: 100,
        grid: { drawOnChartArea: false }, 
        ticks: {
            color: '#9ca3af',
            font: { size: 10 },
            callback: value => value + '%'
        }
    },
                x: {
                    ticks: { color: '#9ca3af', font: { size: 10 }, } 
                },
            }
        }
    });

    this.renderComparisonTable(targetGoalIds);
    this.renderHourlyAnalysis(logs);
}


renderHourlyAnalysis(logs) {
    const canvas = document.getElementById('analyticsHourlyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const hourlyData = Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        totalQuality: 0,
        totalMinutes: 0,
        count: 0
    }));

    logs.forEach(log => {
        const hour = new Date(log.timestamp).getHours();
        const result = this.analyzeSingleSession(log);
        
        hourlyData[hour].totalQuality += result.qualityPct;
        hourlyData[hour].totalMinutes += log.minutes;
        hourlyData[hour].count++;
    });

    const labels = hourlyData.map(d => `${d.hour}h`);
    const qualityPoints = hourlyData.map(d => d.count > 0 ? parseFloat((d.totalQuality / d.count).toFixed(1)) : 0);

    const hourPoints = hourlyData.map(d => parseFloat((d.totalMinutes / 60).toFixed(2)));

    if (this.charts.hourlyChart) this.charts.hourlyChart.destroy();

    this.charts.hourlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Chất lượng',
                    data: qualityPoints,
                    borderColor: '#a78bfa',
                    backgroundColor: 'rgba(167, 139, 250, 0.05)',
                    borderWidth: 1.5,
                    yAxisID: 'y',
                    fill: true,
                    tension: 0.3,
                    order: 1
                },
                {
                    label: 'Thời lượng', 
                    data: hourPoints,
                    type: 'bar',
                    backgroundColor: 'rgba(56, 189, 248, 0.2)',
                    borderColor: 'rgba(56, 189, 248, 0.5)',
                    borderWidth: 1,
                    yAxisID: 'y1',
                    order: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: true
            },
            elements: {
                point: {
                    hitRadius: 30,
                    hoverRadius: 2.5,
                    radius: 1.3
                }
            },
            plugins: {
                legend: { display: true, labels: { font: {size: 11}} },
                tooltip: {
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        title: (items) => `${items[0].label} - ${parseInt(items[0].label) + 1}h`,
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            if (context.parsed.y !== null) {
                                if (context.dataset.yAxisID === 'y') {
                                    label += context.parsed.y + '%';
                                } else {
                                    const totalHours = context.parsed.y;

                                    if (totalHours < 1) {
                                        label += Math.round(totalHours * 60) + ' phút';
                                    } else {
                                        label += totalHours.toFixed(1) + ' giờ';
                                    }
                                }
                            }
                            return label;
                        },
                        labelColor: function(context) {
                            return {
                                borderColor: context.dataset.borderColor,
                                backgroundColor: context.dataset.borderColor,
                                borderWidth: 0,
                                borderRadius: 2,
                            };
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear', display: true, position: 'left', min: 0, max: 100,
                    grid: { color: '#374151' },
                    ticks: { color: '#9ca3af', font: { size: 10 } }
                },
                y1: {
                    type: 'linear', display: true, position: 'right',
                    beginAtZero: true,
                    grid: { drawOnChartArea: false },
                    ticks: { 
                        color: '#9ca3af',
                        font: { size: 10 },
                        callback: function(value) { 
                            if (value === 0) return 0;
                            if (value < 1) return Math.round(value * 60) + 'p';
                            return value + 'h'; 
                        }
                    }
                },
                x: {
                    ticks: { color: '#9ca3af', font: { size: 10 } },
                    grid: { color: 'rgba(55, 65, 81, 0.5)', display: true }
                }
            }
        }
    });
}

getStatsForRange(startTime, endTime, goalIds) {
    const logs = this.data.logs.filter(l => 
        goalIds.includes(l.goalId) && 
        l.timestamp >= startTime && 
        l.timestamp < endTime
    );

    if (logs.length === 0) return { count: 0, minutes: 0, quality: 0, density: 0 };

    let totalMinutes = 0;
    let totalTouches = 0;
    let weightedQualitySum = 0;

    logs.forEach(l => {
        totalMinutes += l.minutes;
        const count = l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0);
        totalTouches += count;

        const analysis = this.analyzeSingleSession(l);
        weightedQualitySum += (l.minutes * analysis.qualityPct);
    });

    return {
        count: logs.length,
        minutes: totalMinutes,
        quality: (weightedQualitySum / totalMinutes).toFixed(1),
        density: (totalTouches / totalMinutes).toFixed(1)
    };
}

renderComparisonTable(medGoalIds) {
    const tbody = document.getElementById('ana-comparison-table');
    tbody.innerHTML = '';

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    const startOfYesterday = todayStart - (24 * 60 * 60 * 1000);
    const startOfDaybefore = todayStart - (48 * 60 * 60 * 1000);
    const dayOfWeek = now.getDay(); 
    const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    const startOfThisWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diffToMonday).getTime();
    const startOfLastWeek = startOfThisWeek - (7 * 24 * 60 * 60 * 1000);
    const startOfWeekBefore = startOfThisWeek - (14 * 24 * 60 * 60 * 1000);
    const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
    const startOfMonthBefore = new Date(now.getFullYear(), now.getMonth() - 2, 1).getTime();

   const periods = [
        { label: 'Hôm nay', start: todayStart, end: Date.now() },
        { label: 'Hôm qua', start: startOfYesterday, end: todayStart },
		{ label: 'Hôm kia', start: startOfDaybefore, end: startOfYesterday },
        { label: 'Tuần này', start: startOfThisWeek, end: Date.now() },
        { label: 'Tuần trước', start: startOfLastWeek, end: startOfThisWeek },
		{ label: 'Tuần trước nữa', start: startOfWeekBefore, end: startOfLastWeek },
        { label: 'Tháng này', start: startOfThisMonth, end: Date.now() },
        { label: 'Tháng trước', start: startOfLastMonth, end: startOfThisMonth },
		{ label: 'Tháng trước nữa', start: startOfMonthBefore, end: startOfLastMonth }
    ];

    periods.forEach(p => {

        const stats = this.getStatsForRange(p.start, p.end, medGoalIds);
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--border)';
        
        let qualityColor = 'var(--text)';
        if(stats.count > 0) {
            if(stats.quality > 80) qualityColor = 'var(--success)';
            else if(stats.quality < 50) qualityColor = 'var(--danger)';
        }

        row.innerHTML = `
            <td style="padding: 12px 10px; font-weight: 500;">${p.label}</td>
            <td style="padding: 12px 10px; text-align: center;">${stats.count}</td>
            <td style="padding: 12px 10px; text-align: center;">${(stats.minutes/60).toFixed(1)}h</td>
            <td style="padding: 12px 10px; text-align: center; color: ${qualityColor}; font-weight:bold;">${stats.count > 0 ? stats.quality + '%' : '-'}</td>
            <td style="padding: 12px 10px; text-align: center;">${stats.count > 0 ? stats.density : '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

       renderProAnalytics(resetDates = false) {
    if (!document.getElementById('proWeeklyChart')) return;

    // --- 1. SETUP DATES & RANGES ---
    const rangeSelect = document.getElementById('pro-range-select');
    const rangeMode = rangeSelect ? rangeSelect.value : 'this_week';
    const now = new Date();
    
    const realCurrentDay = now.getDay() || 7; 
    const realThisWeekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - realCurrentDay + 1);
    const realThisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    if (resetDates) {
        if (rangeMode === 'last_week') {
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
            this.currentMonth = new Date(this.currentWeekStart.getFullYear(), this.currentWeekStart.getMonth(), 1);
        } 
        else if (rangeMode === 'last_month') {
            this.currentMonth = new Date(realThisMonthStart);
            this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
            this.currentWeekStart = this.getStartOfWeek(new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1));
        }
        else {
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentMonth = new Date(realThisMonthStart);
        }
    }

    // Calculate Breakdown Range
    let filterStart = 0;
    let filterEnd = Date.now() + 86400000;
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    if (rangeMode === 'today') filterStart = todayStart;
    else if (rangeMode === 'yesterday') {
        filterEnd = todayStart;
        filterStart = todayStart - 86400000; 
    }
    else if (rangeMode === 'this_week') filterStart = realThisWeekStart.getTime();
    else if (rangeMode === 'last_week') {
        filterEnd = realThisWeekStart.getTime();
        filterStart = realThisWeekStart.getTime() - (7 * 24 * 60 * 60 * 1000);
    } else if (rangeMode === 'this_month') filterStart = realThisMonthStart.getTime();
    else if (rangeMode === 'last_month') {
        filterEnd = realThisMonthStart.getTime();
        filterStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
    }

    // Ranges for Weekly/Monthly Charts
    const weekStartMs = this.currentWeekStart.getTime();
    const weekEndMs = weekStartMs + (7 * 24 * 60 * 60 * 1000);
    const weekEndDisp = new Date(weekEndMs - 1);
    document.getElementById('pro-weekly-title').innerText = `Tuần (${this.currentWeekStart.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})} - ${weekEndDisp.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})})`;

    const mYear = this.currentMonth.getFullYear();
    const mMonth = this.currentMonth.getMonth();
    const monthlyLabels = Array.from({length: new Date(mYear, mMonth + 1, 0).getDate()}, (_, i) => i + 1);
    document.getElementById('pro-monthly-title').innerText = `Tháng ${new Date(mYear, mMonth).toLocaleDateString('vi-VN', { month: 'numeric', year: 'numeric' })}`;

    // --- 2. PREPARE DATA CONTAINERS (STORING MINUTES) ---
    const qualities = {
        1: { label: 'Cao', color: '#34d399' },
        2: { label: 'Tốt', color: '#60a5fa' },
        3: { label: 'Trung bình', color: '#fbbf24' },
        4: { label: 'Thấp', color: '#f87171' },
        0: { label: 'Thất niệm', color: '#6b7280' } // Added Level 0
    };

    // Initialize with 0 for levels 1-0
    const breakdownData = { 1: 0, 2: 0, 3: 0, 4: 0, 0: 0 };
    const weeklyData = { 
        1: new Array(7).fill(0), 
        2: new Array(7).fill(0), 
        3: new Array(7).fill(0), 
        4: new Array(7).fill(0),
        0: new Array(7).fill(0) 
    };
    const monthlyData = { 
        1: new Array(monthlyLabels.length).fill(0), 
        2: new Array(monthlyLabels.length).fill(0), 
        3: new Array(monthlyLabels.length).fill(0), 
        4: new Array(monthlyLabels.length).fill(0),
        0: new Array(monthlyLabels.length).fill(0) 
    };

    // --- 3. DATA AGGREGATION LOGIC ---
    this.data.logs.forEach(log => {
        // Skip logs without touches (or handle standard logs differently if needed, but Pro view focuses on touches)
        if (!log.touches || log.touches.length === 0) return;

        // 1. Calculate Total Mindful Time vs Distracted Time (in Seconds)
        const analysis = this.analyzeSingleSession(log);
        const totalSec = log.minutes * 60;
        const distractedSec = analysis.distractedSec;
        const mindfulSec = Math.max(0, totalSec - distractedSec);

        // 2. Count Pro touches to calculate ratios for Mindful Time
        const logCounts = { 1: 0, 2: 0, 3: 0, 4: 0 };
        let totalLogProTouches = 0;

        log.touches.forEach(t => {
            if (t.v) {
                logCounts[t.v]++;
                totalLogProTouches++;
            }
        });

        // 3. Prepare Time Buckets
        const logTime = log.timestamp;
        const logDateObj = new Date(logTime);
        
        // Determine array indices
        let weekDayIdx = -1;
        if (logTime >= weekStartMs && logTime < weekEndMs) {
            let d = logDateObj.getDay();
            weekDayIdx = (d === 0 ? 6 : d - 1);
        }
        
        let monthDayIdx = -1;
        if (logDateObj.getFullYear() === mYear && logDateObj.getMonth() === mMonth) {
            monthDayIdx = logDateObj.getDate() - 1;
        }

        // Helper to add minutes
        const addMinutes = (level, minutes) => {
            if (logTime >= filterStart && logTime < filterEnd) {
                breakdownData[level] += minutes;
            }
            if (weekDayIdx !== -1) weeklyData[level][weekDayIdx] += minutes;
            if (monthDayIdx !== -1) monthlyData[level][monthDayIdx] += minutes;
        };

        // 4. Distribute "Distracted" Time (Level 0)
        if (distractedSec > 0) {
            addMinutes(0, distractedSec / 60);
        }

        // 5. Distribute "Mindful" Time (Levels 1-4)
        if (totalLogProTouches > 0) {
            [1, 2, 3, 4].forEach(level => {
                if (logCounts[level] > 0) {
                    const levelSeconds = (logCounts[level] / totalLogProTouches) * mindfulSec;
                    addMinutes(level, levelSeconds / 60);
                }
            });
        }
    });

    const formatTime = (mins) => {
        if (mins >= 60) return (mins / 60).toFixed(1) + 'h';
        return mins.toFixed(0) + 'p';
    };

    const formatTimeDetailed = (mins) => {
        if (mins >= 60) return (mins / 60).toFixed(1) + 'h';
        return mins.toFixed(1) + 'p';
    };
    const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    
    // --- 4. RENDER BREAKDOWN CHART ---
    const ctxBreakdown = document.getElementById('proBreakdownChart').getContext('2d');
    if (this.charts.proBreakdown) this.charts.proBreakdown.destroy();

    // Total Minutes (Mindful + Distracted)
    const totalBreakdown = Object.values(breakdownData).reduce((a, b) => a + b, 0);

    // Calculate Average Score (Only based on Mindful time, i.e., levels 1-4)
    let averageScore = 0;
    const totalMindfulMinutes = breakdownData[1] + breakdownData[2] + breakdownData[3] + breakdownData[4];
    
    if (totalMindfulMinutes > 0) {
        const weightedSum = (breakdownData[1] * 4) + 
                            (breakdownData[2] * 3) + 
                            (breakdownData[3] * 2) + 
                            (breakdownData[4] * 1);
        averageScore = (weightedSum / totalMindfulMinutes).toFixed(2);
    }

    this.charts.proBreakdown = new Chart(ctxBreakdown, {
        type: 'bar',
        data: {
            labels: ['Mức chú tâm'],
            datasets: [
                { label: qualities[1].label, data: [breakdownData[1]], backgroundColor: qualities[1].color, borderRadius: { topLeft: 8, bottomLeft: 8 } },
                { label: qualities[2].label, data: [breakdownData[2]], backgroundColor: qualities[2].color },
                { label: qualities[3].label, data: [breakdownData[3]], backgroundColor: qualities[3].color },
                { label: qualities[4].label, data: [breakdownData[4]], backgroundColor: qualities[4].color },
                { label: qualities[0].label, data: [breakdownData[0]], backgroundColor: qualities[0].color, borderRadius: { topRight: 8, bottomRight: 8 } }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true, display: true,
                    grid: { display: true, color: 'rgba(55, 65, 81, 0.5)' },
                    ticks: { 
                        display: true, color: '#9ca3af', font: { size: 10 },
                        callback: function(value) { return formatTime(value); }
                    }
                },
                y: { stacked: true, display: false }
            },
            plugins: {
                legend: {
                    display: true, position: 'bottom',
                    labels: {
                        color: '#9ca3af', usePointStyle: true, padding: 20, font: { size: 12 },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            return data.datasets.map((dataset, i) => {
                                const val = dataset.data[0];
                                const pct = totalBreakdown > 0 ? ((val / totalBreakdown) * 100).toFixed(1) : 0;
                                const isHidden = !chart.isDatasetVisible(i);
                                return {
                                    text: `${dataset.label} (${pct}%)`,
                                    fillStyle: dataset.backgroundColor, strokeStyle: 'transparent',
                                    fontColor: isHidden ? '#6b7280' : '#9ca3af',
                                    pointStyle: 'circle', datasetIndex: i, hidden: isHidden
                                };
                            });
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    callbacks: {
                        label: function(context) {
                            const val = context.raw; 
                            const pct = totalBreakdown > 0 ? ((val / totalBreakdown) * 100).toFixed(1) : 0;
                            return ` ${context.dataset.label}: ${formatTimeDetailed(val)} (${pct}%)`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: totalBreakdown === 0 ? 'Chưa có dữ liệu ghi nhận' : `Mức chú tâm trung bình: ${averageScore} / 4.0`,
                    color: totalBreakdown === 0 ? '#6b7280' : '#f3f4f6',
                    font: { size: 14, style: 'italic', weight: totalBreakdown === 0 ? 'normal' : '600' },
                    padding: { top: 10, bottom: 10 }
                },
            }
        }
    });

    // --- 5. RENDER WEEKLY & MONTHLY CHARTS ---
    const commonOptions = {
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true, grid: { color: '#374151' }, ticks: { color: '#9ca3af', font: { size: 11 } } },
            y: { 
                stacked: true, 
                grid: { color: '#374151' }, 
                title: { display: false }, 
                ticks: { 
                    color: '#9ca3af', font: { size: 10 },
                    callback: function(value) { return formatTime(value); }
                } 
            }
        },
        plugins: {
            legend: { labels: { color: '#9ca3af', font: {size: 11} } },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        let total = 0;
                        context.chart.data.datasets.forEach((dataset, i) => {
                            if (context.chart.isDatasetVisible(i)) {
                                total += dataset.data[context.dataIndex];
                            }
                        });
                        const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                        return `${label}: ${formatTimeDetailed(value)} (${percentage}%)`;
                    }
                }
            }
        }
    };

    // Weekly Chart
    const weeklyOptions = {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                    ...commonOptions.plugins.tooltip.callbacks,
                    title: (context) => {
                        const dayIndex = context[0].dataIndex;
                        const date = new Date(this.currentWeekStart);
                        date.setDate(date.getDate() + dayIndex);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        return `${context[0].label} (${day}/${month})`;
                    }
                }
            }
        }
    };

    const ctxWeekly = document.getElementById('proWeeklyChart').getContext('2d');
    if (this.charts.proWeekly) this.charts.proWeekly.destroy();
    this.charts.proWeekly = new Chart(ctxWeekly, {
        type: 'bar',
        data: {
            labels: weekDays,
            datasets: [
                { label: qualities[1].label, data: weeklyData[1], backgroundColor: qualities[1].color },
                { label: qualities[2].label, data: weeklyData[2], backgroundColor: qualities[2].color },
                { label: qualities[3].label, data: weeklyData[3], backgroundColor: qualities[3].color },
                { label: qualities[4].label, data: weeklyData[4], backgroundColor: qualities[4].color },
                { label: qualities[0].label, data: weeklyData[0], backgroundColor: qualities[0].color }
            ]
        },
        options: weeklyOptions 
    });

    // Monthly Chart
    const monthlyOptions = {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                    ...commonOptions.plugins.tooltip.callbacks,
                    title: (context) => {
                         const d = context[0].label;
                         return `${String(d).padStart(2, '0')}/${String(mMonth + 1).padStart(2, '0')}`;
                    }
                }
            }
        }
    };

    const ctxMonthly = document.getElementById('proMonthlyChart').getContext('2d');
    if (this.charts.proMonthly) this.charts.proMonthly.destroy();
    this.charts.proMonthly = new Chart(ctxMonthly, {
        type: 'bar',
        data: {
            labels: monthlyLabels,
            datasets: [
                { label: qualities[1].label, data: monthlyData[1], backgroundColor: qualities[1].color },
                { label: qualities[2].label, data: monthlyData[2], backgroundColor: qualities[2].color },
                { label: qualities[3].label, data: monthlyData[3], backgroundColor: qualities[3].color },
                { label: qualities[4].label, data: monthlyData[4], backgroundColor: qualities[4].color },
                { label: qualities[0].label, data: monthlyData[0], backgroundColor: qualities[0].color }
            ]
        },
        options: monthlyOptions
    });

    this.renderProTrendChart();
}
renderProTrendChart() {
    const ctxTrend = document.getElementById('proTrendChart');
    if (!ctxTrend) return;
    const ctx = ctxTrend.getContext('2d');

    // 1. Determine Time Range
    const selectEl = document.getElementById('pro-trend-select');
    const rangeVal = selectEl ? selectEl.value : '30';
    
    let filterStart = 0;
    const now = Date.now();

    if (rangeVal === 'all') {
        filterStart = 0;
    } else {
        const days = parseInt(rangeVal);
        filterStart = now - (days * 24 * 60 * 60 * 1000);
    }

    // 2. Filter Logs (Only logs with Pro data)
    let trendLogs = this.data.logs
        .filter(l => l.timestamp >= filterStart)
        .filter(l => l.touches && l.touches.some(t => t.v)) 
        .sort((a, b) => a.timestamp - b.timestamp);

    if (trendLogs.length === 0) {
        if (this.charts.proTrend) this.charts.proTrend.destroy();
        return;
    }

    // 3. Pre-calculate score for every valid session
    const sessionData = trendLogs.map(log => {
        const proTouches = log.touches.filter(t => t.v);
        const totalScore = proTouches.reduce((sum, t) => sum + (5 - t.v), 0);
        const avg = proTouches.length > 0 ? (totalScore / proTouches.length) : 0;
        
        const d = new Date(log.timestamp);
        // Formats for tooltip and labels
        const timeStr = d.getHours().toString().padStart(2, '0') + ':' + 
                        d.getMinutes().toString().padStart(2, '0');
        const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                        (d.getMonth() + 1).toString().padStart(2, '0');

        return {
            timestamp: log.timestamp,
            date: dateStr,
            fullDateTime: `${timeStr}, ${dateStr}`, 
            score: avg
        };
    });

    // 4. Data Aggregation (Time-Window Averaging)
    // Similar to analyticsTrend: Bin data into buckets to show a true trend
    let chartData = [];
    const maxPoints = 30; // Match analytics chart density

    if (sessionData.length <= maxPoints) {
        // If we have fewer logs than maxPoints, show them all directly
        chartData = sessionData.map(d => ({
            label: d.date,
            score: parseFloat(d.score.toFixed(2)),
            tooltipTitle: d.fullDateTime
        }));
    } else {
        // Otherwise, bucket them by time
        const startTime = sessionData[0].timestamp;
        const endTime = sessionData[sessionData.length - 1].timestamp;
        const totalDuration = endTime - startTime;
        const step = totalDuration / maxPoints;

        for (let i = 0; i < maxPoints; i++) {
            const bucketStart = startTime + (i * step);
            const bucketEnd = bucketStart + step;

            // Find all sessions in this time window
            const bucketLogs = sessionData.filter(d => 
                d.timestamp >= bucketStart && d.timestamp < bucketEnd
            );

            // Ensure the very last log is included
            if (i === maxPoints - 1) {
                const lastLog = sessionData[sessionData.length - 1];
                if (!bucketLogs.includes(lastLog)) bucketLogs.push(lastLog);
            }

            if (bucketLogs.length > 0) {
                // Calculate Average Score for this bucket
                const totalQ = bucketLogs.reduce((sum, item) => sum + item.score, 0);
                const avgQ = totalQ / bucketLogs.length;

                const d = new Date(bucketStart);
                const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                                (d.getMonth() + 1).toString().padStart(2, '0');

                chartData.push({
                    label: dateStr,
                    score: parseFloat(avgQ.toFixed(2)),
                    // Tooltip indicates this is an average
                    tooltipTitle: `${dateStr} (TB ${bucketLogs.length} thời)` 
                });
            }
        }
    }

    // 5. Render Chart
    if (this.charts.proTrend) this.charts.proTrend.destroy();

    this.charts.proTrend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.map(d => d.label),
            datasets: [
                {
                    label: 'Điểm chú tâm TB',
                    data: chartData.map(d => d.score),
                    borderColor: '#818cf8', // Emerald-500 equivalent style
                    backgroundColor: 'rgba(129, 140, 248, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: true
            },
            elements: {
                point: {
                    hitRadius: 30,     
                    hoverRadius: 4     
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    min: 0,
                    max: 4.2, 
                    grid: { color: '#374151' },
                    ticks: {
                        color: '#9ca3af',
                        font: { size: 10 },
                        stepSize: 1,
                        padding: 0.1,
                        callback: function(value) {
                            if(value === 1) return 'Thấp (1)';
                            if(value === 2) return 'TB (2)';
                            if(value === 3) return 'Tốt (3)';
                            if(value === 4) return 'Cao (4)';
							if(value === 0) return '☁️ (0)';
                            return '';
                        }
                    }
                },
                x: {
                    ticks: { color: '#9ca3af', font: { size: 10 } },
                    grid: { color: 'rgba(55, 65, 81, 0.5)' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        title: (context) => chartData[context[0].dataIndex].tooltipTitle,
                        label: function(context) {
                            return `Mức chú tâm: ${context.parsed.y} / 4.0`;
                        }
                    }
                }
            }
        }
    });
}
triggerMindfulnessSuccess(quality = 1) 

{ const settings = this.data.medSettings; const now = Date.now();
    
   const thresholdMs = this.meditationState.threshold * 1000;
const timeDiff = now - this.meditationState.lastTouchTime;

let nextAutoLevel = this.meditationState.currentAutoLevel;
let nextComboCounter = this.meditationState.comboCounter;

if (timeDiff > thresholdMs) {
   
    nextAutoLevel = 4;
    nextComboCounter = 0;
} else {
    if (nextAutoLevel > 1) {
        nextComboCounter++;
        
        
        const hitsRequired = (nextAutoLevel === 3 || nextAutoLevel === 2) ? 20 : 10;
        if (nextComboCounter >= hitsRequired) {
            nextAutoLevel--;    
            nextComboCounter = 0;
        }
    }
}


let finalQuality = 4; 

if (settings.mode === 'pro') {
   
    let potentialProQuality = quality;
    if (quality === 2) {
        const currentGoodCount = this.meditationState.consecutiveGoodCount || 0;
        if (currentGoodCount + 1 >= 10) {
            potentialProQuality = 1;
        }
    }
    
    finalQuality = Math.min(potentialProQuality, nextAutoLevel);

} else {
    finalQuality = nextAutoLevel;
}


const isProLow = (settings.mode === 'pro' && finalQuality === 4);
const isStandardLow = (settings.mode !== 'pro' && finalQuality === 4);

// Logic MỚI: Kiểm tra chế độ bật + Là mức Thấp + Random trúng tỷ lệ
let needConfirm = false;

if (settings.confirmMode && (isProLow || isStandardLow)) {
    // Nếu đang chờ xác nhận thì không cần random lại, coi như cần xác nhận tiếp
    if (this.meditationState.pendingConfirmation) {
        needConfirm = true; 
    } else {
        // Nếu là lần chạm đầu, tung xúc xắc
        const chance = settings.confirmProbability || 100;
        const roll = Math.random() * 100;
        if (roll <= chance) {
            needConfirm = true;
        }
    }
}

if (needConfirm) {
    const counterEl = document.getElementById('med-counter');

    if (!this.meditationState.pendingConfirmation) {
        this.meditationState.pendingConfirmation = true;
        this.meditationState.pendingTouchData = { 
            quality: finalQuality, 
            timestamp: now 
        };
        
        counterEl.style.transition = "all 0.2s";
        counterEl.style.borderColor = "var(--warning)";
        counterEl.style.color = "var(--warning)";
        counterEl.style.transform = "scale(0.85)";
      
        // HARDCODE THỜI GIAN 3000ms (3 giây)
        this.meditationState.confirmationTimeout = setTimeout(() => {
            this.meditationState.pendingConfirmation = false;
            this.meditationState.pendingTouchData = null;
            
            counterEl.style.borderColor = "transparent";
            counterEl.style.color = "white";
            counterEl.style.transform = "scale(1)";
        }, 3000); 

        return; // Dừng lại, chờ chạm lần 2

    } else {
        // Đã chạm lần 2 thành công
        clearTimeout(this.meditationState.confirmationTimeout);
        this.meditationState.pendingConfirmation = false;
        // Tiếp tục chạy xuống logic ghi nhận bên dưới...
    }
}


this.meditationState.currentAutoLevel = nextAutoLevel;
this.meditationState.comboCounter = nextComboCounter;
this.meditationState.lastTouchTime = now;

if (settings.mode === 'pro') {
    if (quality === 2) {
        this.meditationState.consecutiveGoodCount = (this.meditationState.consecutiveGoodCount || 0) + 1;
    } else {
        this.meditationState.consecutiveGoodCount = 0;
    }
}


this.handleMeditationTouch(finalQuality);


if (settings.vibration && navigator.vibrate) {
    switch(finalQuality) {
        case 1: navigator.vibrate([80, 50, 80]); break; 
        case 2: navigator.vibrate([60, 40, 60]); break; 
        case 3: navigator.vibrate([40, 30, 40]); break; 
        case 4: navigator.vibrate(50); break;           
        default: navigator.vibrate(50);
    }
}

const counterEl = document.getElementById('med-counter');
const colors = { 1: 'var(--q-1)', 2: 'var(--q-2)', 3: 'var(--q-3)', 4: 'var(--q-4)' }; 
const pulseColor = colors[finalQuality] || 'var(--q-4)';

counterEl.style.transition = "transform 0.1s";
counterEl.style.transform = "scale(1.3)";
counterEl.style.borderColor = pulseColor;
counterEl.style.color = pulseColor; 

setTimeout(() => {
    counterEl.style.transform = "scale(1)";
    counterEl.style.borderColor = "transparent";
    counterEl.style.color = "white";
}, 200);
}
            
            save() {
               
                dbHelper.saveAll(this.data).catch(err => {
                    console.error("Save failed:", err);
                    this.showToast("Lỗi lưu dữ liệu!");
                });
                
                this.updateStats();
            }
get totalMindfulnessCounts() {
    return this.data.logs.reduce((sum, log) => {

        return sum + (log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0));
    }, 0);
}

            playBell() {
                const audio = document.getElementById('bell');
                if (audio) {
                    audio.currentTime = 0;
                    audio.play().catch(e => console.log("Audio play failed (autoplay blocked):", e));
                }
            }

            saveGoal(e) {
                e.preventDefault();
                const id = document.getElementById('g-id').value;
                const type = document.getElementById('g-type').value || 'standard';
                const name = document.getElementById('g-name').value;
                const category = document.getElementById('g-cat').value;
                const color = document.getElementById('g-color').value;
                const lifetimeTarget = parseInt(document.getElementById('g-lifetime-target').value);
                const dailyTarget = parseInt(document.getElementById('g-daily-target').value);

                if (id) {
                    const goal = this.data.goals.find(g => g.id === id);
                    if (goal) {
                        goal.name = name; goal.category = category; goal.color = color;
                        goal.lifetimeTargetMinutes = lifetimeTarget; goal.dailyTargetMinutes = dailyTarget;
                        this.showToast('Đã cập nhật mục tiêu!');
                    }
                } else {
                    const newGoal = {
                        id: Date.now().toString(), type, name, category, color,
                        lifetimeTargetMinutes: lifetimeTarget, dailyTargetMinutes: dailyTarget || 0,
                        totalMinutes: 0, totalMindfulness: 0, sessionTargetSeconds: 0,
                        remainingSeconds: 0, currentSessionStartTime: null, isActive: false
                    };
                    this.data.goals.push(newGoal);
                    this.showToast('Đã tạo mục tiêu!');
                }
                this.save();
                this.renderGoals();
                this.closeModal();
            }

          

toggleTimer(id) {
    const goal = this.data.goals.find(g => g.id === id);
    if (!goal) return;

    this.data.goals.forEach(g => {
        if(g.isActive && g.id !== id && g.type === 'standard') this.toggleTimer(g.id); 
    });

    if (goal.type === 'meditation') {
        this.startMeditationSetup(goal);
        return;
    }

    if (goal.isActive) {
        clearInterval(this.timers[id]);
        goal.isActive = false;
        const spentSeconds = goal.sessionTargetSeconds - goal.remainingSeconds;
        const minutesSpent = Math.floor(spentSeconds / 60);
        const startTime = goal.currentSessionStartTime || Date.now();
        goal.sessionTargetSeconds = 0; goal.remainingSeconds = 0; goal.currentSessionStartTime = null;
        if (minutesSpent > 0) this.openSessionModal(id, minutesSpent, null, startTime);
        else this.showToast('Phiên quá ngắn.');
    } else {

        const defaultTime = goal.lastDuration || '20'; 
        const minStr = prompt('Thời lượng (phút):', defaultTime);
        
        if (!minStr) return;
        const min = parseInt(minStr);
        if (isNaN(min) || min <= 0) return;

        goal.lastDuration = min; 
        this.save(); 


        goal.sessionTargetSeconds = min * 60;
        goal.remainingSeconds = goal.sessionTargetSeconds;
        goal.isActive = true;
        goal.currentSessionStartTime = Date.now(); 

        this.timers[id] = setInterval(() => {
            if (goal.remainingSeconds > 0) {
                goal.remainingSeconds--;
            } else {

                clearInterval(this.timers[id]);
                this.playBell(); 
                
                goal.isActive = false;
                const minutesSpent = Math.floor(goal.sessionTargetSeconds / 60);
                const startTime = goal.currentSessionStartTime;
                goal.sessionTargetSeconds = 0; goal.remainingSeconds = 0; goal.currentSessionStartTime = null;
                this.openSessionModal(id, minutesSpent, null, startTime);
                this.showToast('Hoàn thành!');
                this.renderGoals(); 
            }
        }, 1000);
    }
    this.renderGoals();
}

startMeditationSetup(goal) {

    const defaultTime = goal.lastDuration || '20';
    const minStr = prompt('Thời gian thiền (phút):', defaultTime);
    
    if (!minStr) return;
    const min = parseInt(minStr);
    if (isNaN(min) || min <= 0) return;

    const defaultThreshold = goal.lastThreshold || '10';
    const threshStr = prompt('Ngưỡng mất tập trung (giây):', defaultThreshold);
    let threshold = 10; 
    
    if (threshStr && !isNaN(parseInt(threshStr)) && parseInt(threshStr) > 0) {
        threshold = parseInt(threshStr);
    }

    goal.lastDuration = min;
    goal.lastThreshold = threshold;
    this.save(); 
    
    if (typeof Website2APK !== 'undefined') {
        Website2APK.keepScreenOn(true); 
    }

    this.meditationState = {
        active: true, paused: false, goalId: goal.id, count: 0,
        startTime: Date.now(), totalDurationSeconds: min * 60,
        remainingSeconds: min * 60, touches: [],
        threshold: threshold, 
        quoteInterval: null,
        
        // --- NEW: Time-Based Streak Variables (For Auto-Upgrading) ---
        currentAutoLevel: 4,      // Starts at 'Thấp'
        comboCounter: 0,          // Counts successful time-consecutive touches
        lastTouchTime: Date.now(), // Tracks time gaps
        
        // --- EXISTING: Pro-Mode "Good" Streak (Time Independent) ---
        consecutiveGoodCount: 0, 

        pendingConfirmation: false,
        pendingTouchData: null,
        confirmationTimeout: null
    };

    document.getElementById('meditation-overlay').style.display = 'flex';
    document.getElementById('med-counter').innerText = '0';
    this.updateMedTimerDisplay();

    this.updateMeditationQuote(true); 
    this.meditationState.quoteInterval = setInterval(() => {
        if(!this.meditationState.paused) {
            this.updateMeditationQuote(false);
        }
    }, 8000); 

    this.meditationState.timerRef = setInterval(() => {
        if (!this.meditationState.paused) {
            if (this.meditationState.remainingSeconds > 0) {
                this.meditationState.remainingSeconds--;
                this.updateMedTimerDisplay();
            } else {
                this.concludeMeditationSession('auto');
            }
        }
    }, 1000);
}

            updateMedTimerDisplay() {
                const s = this.meditationState.remainingSeconds;
                const m = Math.floor(s / 60);
                const sec = s % 60;
                document.getElementById('med-timer').innerText = `${m}:${sec.toString().padStart(2, '0')}`;
            }

            handleMeditationTouch(value = 1, customTimestamp = null) {
    if (!this.meditationState.active || this.meditationState.paused) return;
    this.meditationState.count++;

    const touchTime = customTimestamp || Date.now();
    const touchData = { t: touchTime };
    touchData.v = value;

    this.meditationState.touches.push(touchData);
    
    const el = document.getElementById('med-counter');
    el.innerText = this.meditationState.count;
}

            
       updateMeditationQuote(isFirstTime = false) {
    const container = document.getElementById('med-quote-container');
    const txt = document.getElementById('med-quote-text');

    if (isFirstTime) {

        const randomItem = DHAMMAPADA[Math.floor(Math.random() * DHAMMAPADA.length)];
        txt.innerHTML = randomItem.t;
        container.style.opacity = '1';
    } else {

        container.style.opacity = '0';
        setTimeout(() => {
            const randomItem = DHAMMAPADA[Math.floor(Math.random() * DHAMMAPADA.length)];
            txt.innerHTML = randomItem.t;
            container.style.opacity = '1';
        }, 1000);
    }
}   

            concludeMeditationSession(type = 'manual') {
				if (type === 'manual') {
        // If user clicks "Cancel" (Hủy), return immediately to keep the session running
        if (!confirm("Bạn có chắc muốn kết thúc thời thiền không?")) {
            return;
        }
    }
    clearInterval(this.meditationState.timerRef);

    if (this.meditationState.quoteInterval) {
        clearInterval(this.meditationState.quoteInterval);
    }
    if (typeof Website2APK !== 'undefined') {
        Website2APK.keepScreenOn(false); 
    }

    if (type === 'auto') {
        this.playBell();
    }
    
    document.getElementById('meditation-overlay').style.display = 'none';
    
    const durationSeconds = this.meditationState.totalDurationSeconds - this.meditationState.remainingSeconds;
    const minutes = Math.ceil(durationSeconds / 60);
    
    if (minutes <= 0) {
        this.showToast("Phiên quá ngắn");
        this.meditationState.active = false;
        return;
    }
    
    document.getElementById('med-finish-count').innerText = this.meditationState.count;
    document.getElementById('med-finish-time').innerText = minutes + 'm';
    document.getElementById('med-finish-notes').value = '';
	this.renderQuickTags('finish-tags', 'med-finish-notes');
	
	const discardBtn = document.getElementById('btn-med-discard');
    const actionContainer = document.getElementById('med-finish-actions');

    if (discardBtn && actionContainer) {
        if (type === 'auto') {
            // Khi hết giờ: Ẩn nút Hủy và căn giữa nút Lưu
            discardBtn.style.display = 'none';
            actionContainer.style.justifyContent = 'center';
        } else {
            // Khi bấm dừng thủ công: Hiện đầy đủ và căn phải như cũ
            discardBtn.style.display = 'block';
            actionContainer.style.justifyContent = 'flex-end';
        }
    }
    document.getElementById('meditation-finish-modal').style.display = 'flex';
	
	
}
            
            discardMeditation() {
                document.getElementById('meditation-finish-modal').style.display = 'none';
                this.meditationState.active = false;
                this.showToast("Đã ngưng thời thiền");
            }

            saveMeditationLog() {
    const durationSeconds = this.meditationState.totalDurationSeconds - this.meditationState.remainingSeconds;
    const minutes = Math.ceil(durationSeconds / 60);
    const notes = document.getElementById('med-finish-notes').value;

    const goal = this.data.goals.find(g => g.id === this.meditationState.goalId);
    
    const log = {
        goalId: goal.id,
        date: this.toIsoDate(new Date(this.meditationState.startTime)),
        timestamp: this.meditationState.startTime,
        minutes: minutes,
        notes: `Chánh niệm: ${this.meditationState.count}. ${notes}`,
        touches: this.meditationState.touches.map(t => {
    const delta = Math.max(0, t.t - this.meditationState.startTime);
    // If it has a value (Pro mode), keep it. Otherwise just save the number.
    return t.v ? { d: delta, v: t.v } : delta;
}),
        threshold: this.meditationState.threshold 
    };

    this.data.logs.push(log);
    goal.totalMinutes += minutes;
    if (!goal.totalMindfulness) goal.totalMindfulness = 0;
    goal.totalMindfulness += this.meditationState.count;

    this.meditationState.active = false;
    this.save();
    this.recalculateStreak();
    this.renderGoals();
    this.renderReports();
    this.checkAchievements();
    
    document.getElementById('meditation-finish-modal').style.display = 'none';
    this.showToast(`Đã lưu thời thiền! +${this.meditationState.count} chánh niệm.`);
}

            updateTimerUI() {
                const todayStr = this.toIsoDate(new Date());
                this.data.goals.forEach(goal => {
                    if (goal.type === 'meditation') return; 
                    let activeSessionMins = 0;
                    let sessionPctVal = 0;
                    if (goal.isActive) {
                        const display = document.getElementById(`timer-${goal.id}`);
                        if (display) display.innerText = this.formatTime(goal.remainingSeconds);
                        const activeSessionSeconds = goal.sessionTargetSeconds - goal.remainingSeconds;
                        activeSessionMins = Math.floor(activeSessionSeconds / 60);
                        sessionPctVal = goal.sessionTargetSeconds > 0 ? (activeSessionSeconds / goal.sessionTargetSeconds) * 100 : 0;
                    }
                    const sessionBar = document.getElementById(`bar-session-${goal.id}`);
                    const sessionText = document.getElementById(`prog-text-session-${goal.id}`);
                    if (sessionBar) sessionBar.style.width = `${sessionPctVal}%`;
                    if (sessionText) sessionText.innerText = goal.isActive ? `${activeSessionMins} / ${Math.floor(goal.sessionTargetSeconds / 60)} phút` : "Sẵn sàng";
                });
                this.updateStats(); 
            }


openMedSettings() {
    const s = this.data.medSettings;
    if(!s.mode) s.mode = s.proMode ? 'pro' : 'tap';
    this.setMedModeUI(s.mode);
    
    document.getElementById('inp-hold-time').value = s.holdDuration;
    document.getElementById('disp-hold-time').innerText = (s.holdDuration / 1000) + 's';
    document.getElementById('inp-tap-count').value = s.tapRequired || 1;
    document.getElementById('inp-vibrate').checked = s.vibration;
    
    // Cập nhật Confirm UI
    document.getElementById('inp-confirm-mode').checked = s.confirmMode || false;
    
    // Load Probability thay vì Time
    const prob = (typeof s.confirmProbability !== 'undefined') ? s.confirmProbability : 100;
    document.getElementById('inp-confirm-prob').value = prob;
    document.getElementById('disp-confirm-prob').innerText = prob + '%';
    
    this.toggleConfirmSlider(); 
    
    const modal = document.getElementById('med-settings-modal');
    modal.style.display = 'flex';
}
toggleConfirmSlider() {
    const isChecked = document.getElementById('inp-confirm-mode').checked;
    document.getElementById('confirm-slider-group').style.display = isChecked ? 'block' : 'none';
}


closeMedSettings() {
    this.saveMedSettings();
    document.getElementById('med-settings-modal').style.display = 'none';
}

setMedMode(mode) {
    this.setMedModeUI(mode);
    this.saveMedSettings();
}

setMedModeUI(mode) {

    ['tap', 'hold', 'auto', 'pro'].forEach(m => {
        const btn = document.getElementById(`btn-mode-${m}`);
        if (btn) {
            if (m === mode) btn.classList.add('btn-mode-active');
            else btn.classList.remove('btn-mode-active');
        }
    });

    const groupHold = document.getElementById('setting-hold-group');     
    const groupTap = document.getElementById('setting-tap-group');       
    const groupLegend = document.getElementById('setting-pro-legend');   
    const desc = document.getElementById('mode-desc');                   

    groupHold.style.display = 'none';
    groupTap.style.display = 'none';
    groupLegend.style.display = 'none';

    if (mode === 'hold') {
        groupHold.style.display = 'block';
        desc.innerText = "Chạm & giữ để ghi nhận chánh niệm.";
    } 
    else if (mode === 'tap') {
        groupTap.style.display = 'block'; 
        desc.innerText = "Chạm nhẹ để ghi nhận chánh niệm.";
    } 
    else if (mode === 'auto') {
        groupHold.style.display = 'block';
        desc.innerText = "Tự động phát hiện chế độ Chạm hoặc Giữ.";
    } 
    else if (mode === 'pro') {
		groupHold.style.display = 'block';
        groupLegend.style.display = 'block';
        desc.innerText = "Phân loại mức độ chú tâm dựa trên cách chạm.";
    }
}

saveMedSettings() {
    let mode = 'tap';
    if(document.getElementById('btn-mode-hold').classList.contains('btn-mode-active')) mode = 'hold';
    else if(document.getElementById('btn-mode-auto').classList.contains('btn-mode-active')) mode = 'auto';
    else if(document.getElementById('btn-mode-pro').classList.contains('btn-mode-active')) mode = 'pro';

    this.data.medSettings = {
        mode: mode,
        holdDuration: parseInt(document.getElementById('inp-hold-time').value),
        tapRequired: parseInt(document.getElementById('inp-tap-count').value),
        vibration: document.getElementById('inp-vibrate').checked,
        confirmMode: document.getElementById('inp-confirm-mode').checked,
        
        // Lưu giá trị xác suất, bỏ confirmWindow
        confirmProbability: parseInt(document.getElementById('inp-confirm-prob').value)
    };

    this.save();
}

// 3. Hàm Helper mới (Thay thế updateConfirmDisplay cũ)
updateConfirmProbDisplay() {
    const val = document.getElementById('inp-confirm-prob').value;
    document.getElementById('disp-confirm-prob').innerText = val + '%';
}

updateMedSettingDisplay() {
    const ms = document.getElementById('inp-hold-time').value;
    document.getElementById('disp-hold-time').innerText = (ms / 1000) + 's';

    this.data.medSettings.holdDuration = parseInt(ms);
}

toggleProModeUI() {
    const isPro = document.getElementById('inp-pro-mode').checked;
    document.getElementById('simple-tap-options').style.display = isPro ? 'none' : 'block';
    document.getElementById('pro-tap-options').style.display = isPro ? 'block' : 'none';
}

setDailyMinMedTarget(id) {
    const goal = this.data.goals.find(g => g.id === id);
    if (!goal) return;

    const current = goal.dailyMinMedTarget || 120;
    const input = prompt(`Đặt mục tiêu thời gian hàng ngày (phút) cho "${goal.name}":`, current);

    if (input !== null) {
        const val = parseInt(input);
        if (!isNaN(val) && val > 0) {
            goal.dailyMinMedTarget = val;
            this.save();
            this.renderGoals();
            this.showToast(`Đã cập nhật: ${val} phút/ngày`);
        }
    }
}
            renderGoals() {
    const container = document.getElementById('active-goals-container');
    const emptyMsg = document.getElementById('empty-msg');
    container.innerHTML = '';
    if (this.data.goals.length === 0) { emptyMsg.style.display = 'block'; return; }
    emptyMsg.style.display = 'none';
    const todayStr = this.toIsoDate(new Date());

    this.data.goals.forEach(goal => {
        const isMeditation = goal.type === 'meditation';
        const unitLabel = isMeditation ? 'chánh niệm' : 'phút';
        const targetProp = isMeditation ? 'totalMindfulness' : 'totalMinutes';
        const overallPct = goal.lifetimeTargetMinutes > 0 ? Math.min((goal[targetProp] / goal.lifetimeTargetMinutes) * 100, 100) : 0;

        // 1. Calculate Today's Primary Value (Counts for Med, Mins for Standard)
        let todayVal = 0;
        if (isMeditation) {
            todayVal = this.data.logs
                .filter(l => l.goalId === goal.id && l.date === todayStr)
                .reduce((sum, l) => sum + (l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0)), 0);
        } else {
            todayVal = this.data.logs.filter(l => l.goalId === goal.id && l.date === todayStr).reduce((sum, l) => sum + l.minutes, 0);
        }
        
        const todayMinutes = this.data.logs
            .filter(l => l.goalId === goal.id && l.date === todayStr)
            .reduce((sum, l) => sum + l.minutes, 0);

        const dailyTarget = goal.dailyTargetMinutes || 0;
		const dailyminmedTarget = goal.dailyMinMedTarget || 120;
        let dailyPct = 0;
        let dailyBarColor = goal.color;
        
        // Calculate percentage for the Primary Bar
        if (dailyTarget > 0) {
            dailyPct = Math.min((todayVal / dailyTarget) * 100, 100);
            if (todayVal >= dailyTarget) dailyBarColor = 'var(--success)';
        }
        
        const div = document.createElement('div');
        div.className = 'card goal-card';
        div.style.borderLeft = `5px solid ${goal.color}`;
        
        let controlsHtml = '', dailySectionHtml = '', sessionSectionHtml = '';
        
        // --- DAILY SECTIONS ---
        if (dailyTarget > 0) {
            // 1. ORIGINAL BAR (Chánh niệm / Phút)
            dailySectionHtml = `
                <div style="margin-bottom: 10px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; align-items:center;">
                        <strong style="color:var(--text);">Hôm nay</strong>
                        <span style="font-weight:600;">${todayVal} / ${dailyTarget} ${unitLabel}</span>
                    </div>
                    <div class="progress-container" style="height: 6px;"><div class="progress-bar" style="width: ${dailyPct}%; background: ${dailyBarColor}"></div></div>
                </div>`;

            // 2. NEW BAR (Minutes) - Only for Meditation Goals
            if (isMeditation) {
                const minPct = Math.min((todayMinutes / dailyminmedTarget) * 100, 100);
                let minBarColor = goal.color;
                if (todayMinutes >= dailyminmedTarget) minBarColor = 'var(--success)';

                // CHANGE 2: Added onclick event, cursor pointer, and hover visual cues
                dailySectionHtml += `
                <div 
                    onclick="app.setDailyMinMedTarget('${goal.id}')"
                    title="Chạm để thay đổi mục tiêu thời gian"
                    style="margin-bottom: 15px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; cursor: pointer; transition: background 0.2s;"
                    onmouseover="this.style.background='rgba(0,0,0,0.3)'"
                    onmouseout="this.style.background='rgba(0,0,0,0.2)'"
                >
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; align-items:center;">
                        <strong style="color:var(--text);">Thời gian</strong>
                        <span style="font-weight:600;">${todayMinutes} / ${dailyminmedTarget} phút <i class="fas fa-pen" style="font-size:10px; opacity:0.5; margin-left:4px;"></i></span>
                    </div>
                    <div class="progress-container" style="height: 6px;"><div class="progress-bar" style="width: ${minPct}%; background: ${minBarColor}"></div></div>
                </div>`;
            }
        }

        if (isMeditation) {
            controlsHtml = `
                 <div class="timer-controls">
                    <div style="font-size: 14px; color: var(--text-light); text-transform: uppercase;">Hành Thiền</div>
                    <div style="display:flex; gap: 10px;">
                        <button class="btn-icon btn-play" style="background: var(--zen); color: white;" onclick="app.toggleTimer('${goal.id}')" title="Hành thiền"><i class="fas fa-om"></i></button>
                        
                        <button class="btn-icon" style="background:var(--warning); color:#000;" onclick="app.openSessionModal('${goal.id}')" title="Nhập thủ công"><i class="fas fa-plus"></i></button>
                    </div>
                </div>`;
        } else {
            sessionSectionHtml = `
                <div class="section-label">Phiên hiện tại</div>
                <div class="progress-container"><div id="bar-session-${goal.id}" class="progress-bar" style="background:var(--success); width:0%;"></div></div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-light);"><span id="prog-text-session-${goal.id}">Sẵn sàng</span></div>`;
            controlsHtml = `
                <div class="timer-controls">
                    <div id="timer-${goal.id}" class="timer-display">00:00</div>
                    <div style="display:flex; gap: 10px;">
                        <button class="btn-icon ${goal.isActive ? 'btn-stop' : 'btn-play'}" onclick="app.toggleTimer('${goal.id}')"><i class="fas ${goal.isActive ? 'fa-stop' : 'fa-play'}"></i></button>
                        <button class="btn-icon" style="background:var(--warning); color:#000;" onclick="app.openSessionModal('${goal.id}')"><i class="fas fa-plus"></i></button>
                    </div>
                </div>`;
        }

        div.innerHTML = `
            <div class="goal-header">
                <div><div class="goal-title">${goal.name}</div><span class="goal-tag" style="color:#b1b1c9 ; background: rgba(255,255,255,0.1)">${goal.category}</span></div>
                <div style="display:flex; gap: 5px;">
                    <button class="btn-icon" style="color: var(--text-light)" onclick="app.openModal('${goal.id}', '${goal.type}')"><i class="fas fa-pencil-alt"></i></button>
                    <button class="btn-icon" style="color: var(--text-light)" onclick="app.deleteGoal('${goal.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            ${dailySectionHtml}
            <div class="section-label">Mức độ thành tựu</div>
            <div class="progress-container"><div class="progress-bar" style="width: ${overallPct}%; background: ${goal.color}"></div></div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-light); margin-bottom: 15px;"><span>${goal[targetProp]} / ${goal.lifetimeTargetMinutes} ${unitLabel}</span><span>${(overallPct).toFixed(1)}%</span></div>
            ${sessionSectionHtml} ${controlsHtml}
            <div class="sessions-list" style="margin-top: 15px; max-height: 150px; overflow-y: auto;"><div id="sessions-${goal.id}"></div></div>
        `;
        container.appendChild(div);
        this.renderSessions(goal.id, isMeditation);
    });
}
            
            renderSessions(goalId, isMeditation) {
                const container = document.getElementById(`sessions-${goalId}`);
                if (!container) return;
                container.innerHTML = '';

                const sessions = this.data.logs.filter(l => l.goalId === goalId).sort((a,b) => b.timestamp - a.timestamp);
                
                if (sessions.length === 0) { 
                    container.innerHTML = '<p style="font-size:12px; color:var(--text-light);">Chưa có phiên nào</p>'; 
                    return; 
                }
                
                const ol = document.createElement('ol');
                sessions.forEach((log) => {
                    const sLi = document.createElement('li');
                    sLi.className = 'session-item';
                    
                    const notesDisplay = log.notes ? `<span class="session-notes">"${log.notes}"</span>` : '';

                    let actionButtons = '<div style="display:flex; gap:5px;">';

                    if (isMeditation && log.touches && log.touches.length > 0) {
                        actionButtons += `<button class="btn-icon" style="background:transparent; color:var(--zen); height:24px; width:24px;" onclick="app.showSessionGraph('${log.timestamp}')" title="Xem biểu đồ"><i class="fas fa-chart-area" style="font-size:12px;"></i></button>`;
                    }

                    actionButtons += `<button class="btn-icon" style="background:transparent; color:var(--text-light); height:24px; width:24px;" onclick="app.openSessionModal('${goalId}', ${log.minutes}, ${log.timestamp}, ${log.timestamp})" title="Sửa chi tiết"><i class="fas fa-edit" style="font-size:12px;"></i></button>`;
                    
                    actionButtons += '</div>';


                    sLi.innerHTML = `
                        <div class="session-content">
                            <span class="session-date">${this.toDisplayDate(log.timestamp)}</span>: ${log.minutes} phút 
                            ${notesDisplay}
                        </div>
                        ${actionButtons}
                    `;
                    ol.appendChild(sLi);
                });
                container.appendChild(ol);
            }


showSessionGraph(timestamp) {
    const exportBtn = document.getElementById('btn-export-session');
    if (exportBtn) {
        exportBtn.onclick = () => this.exportSessionData(timestamp);
    }

    const log = this.data.logs.find(l => l.timestamp == timestamp);
    if (!log || !log.touches) {
        this.showToast("Chưa có dữ liệu chi tiết cho thời thiền này");
        return;
    }

    this.currentGraphLog = log;

    document.getElementById('graph-modal').style.display = 'flex';
    document.getElementById('graph-date').innerText = new Date(log.timestamp).toLocaleString('vi-VN');

    document.getElementById('graph-type-select').value = 'interval';
    this.updateSessionChart();
}

updateSessionChart() {
    if (!this.currentGraphLog) return;
    const type = document.getElementById('graph-type-select').value;
    const ctx = document.getElementById('sessionGraph').getContext('2d');
    
    if (this.charts.session) this.charts.session.destroy();

    if (type === 'interval') this.renderIntervalChart(ctx, this.currentGraphLog);
    else if (type === 'pro') this.renderProChart(ctx, this.currentGraphLog);
    else this.renderIntensityChart(ctx, this.currentGraphLog);
}
renderProChart(ctx, log) {
    // 1. Calculate Mindfulness vs Distraction
    const analysis = this.analyzeSingleSession(log); 
    const totalSec = log.minutes * 60;
    
    // Distracted Seconds (Thất niệm)
    const distractedSec = analysis.distractedSec;
    
    // Mindful Seconds (Tỉnh thức)
    const mindfulSec = Math.max(0, totalSec - distractedSec);

    // 2. Count Pro Touches
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
    let proCount = 0;
    
    if (log.touches && log.touches.length > 0) {
        log.touches.forEach(t => {
            if (t.v) {
                counts[t.v]++;
                proCount++;
            }
        });
    }

    // 3. Distribute Mindful Time
    // We use key '0' for Standard/Basic mindfulness (No Pro data)
    const dataSeconds = { 1: 0, 2: 0, 3: 0, 4: 0, 0: 0 };

    if (proCount > 0) {
        // Distribute based on Pro ratios
        dataSeconds[1] = (counts[1] / proCount) * mindfulSec;
        dataSeconds[2] = (counts[2] / proCount) * mindfulSec;
        dataSeconds[3] = (counts[3] / proCount) * mindfulSec;
        dataSeconds[4] = (counts[4] / proCount) * mindfulSec;
    } else {
        // No Pro data found -> Assign all mindful time to "Basic" (Level 0)
        dataSeconds[0] = mindfulSec;
    }

// --- NEW: Calculate Average Score for Title ---
    let titleText = `Tổng thời gian: ${log.minutes} phút`;
    let titleWeight = 'normal';
    let titleColor = '#9ca3af';

    if (proCount > 0) {
        // Weighted Sum: Level 1 (Cao)=4, Level 2 (Tốt)=3, Level 3 (TB)=2, Level 4 (Thấp)=1
        const weightedSum = (counts[1] * 4) + (counts[2] * 3) + (counts[3] * 2) + (counts[4] * 1);
        const averageScore = (weightedSum / proCount).toFixed(2);
        
        titleText = `Mức chú tâm trung bình: ${averageScore} / 4.0`;
        titleWeight = '600';
        titleColor = '#f3f4f6';
    }
    const qualities = {
        1: { label: 'Cao', color: '#34d399' },      // Green
        2: { label: 'Tốt', color: '#60a5fa' },      // Blue
        3: { label: 'Trung bình', color: '#fbbf24' },       // Yellow
        4: { label: 'Thấp', color: '#f87171' },     // Red
        0: { label: 'Chánh niệm',  color: '#a78bfa' },      // Purple (New Standard Level)
        5: { label: 'Thất niệm', color: '#6b7280' }     // Gray (Updated from White)
    };

    // 5. Cleanup Old Chart
    if (this.charts.session) this.charts.session.destroy();

    // 6. Render Chart
    this.charts.session = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Phân bổ phiên thiền'],
            datasets: [
                // Only show Pro levels if Pro data exists, otherwise show Basic
                ...(proCount > 0 ? [
                    {
                        label: qualities[1].label,
                        data: [dataSeconds[1]],
                        backgroundColor: qualities[1].color,
                        barPercentage: 0.6,
                        borderRadius: { topLeft: 8, bottomLeft: 8 }
                    },
                    {
                        label: qualities[2].label,
                        data: [dataSeconds[2]],
                        backgroundColor: qualities[2].color,
                        barPercentage: 0.6
                    },
                    {
                        label: qualities[3].label,
                        data: [dataSeconds[3]],
                        backgroundColor: qualities[3].color,
                        barPercentage: 0.6
                    },
                    {
                        label: qualities[4].label,
                        data: [dataSeconds[4]],
                        backgroundColor: qualities[4].color,
                        barPercentage: 0.6
                    }
                ] : [
                    {
                        label: qualities[0].label,
                        data: [dataSeconds[0]],
                        backgroundColor: qualities[0].color,
                        barPercentage: 0.6,
                        borderRadius: { topLeft: 8, bottomLeft: 8 }
                    }
                ]),
                {
                    label: qualities[5].label,
                    data: [distractedSec],
                    backgroundColor: qualities[5].color,
                    barPercentage: 0.6,
                    borderRadius: { topRight: 8, bottomRight: 8 }
                }
            ]
        },
        options: {
            indexAxis: 'y', 
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    display: true, 
                    max: totalSec, 
					grid: {
            color: 'rgba(156, 163, 175, 0.1)' 
        },
        ticks: {
            color: '#9ca3af',
            callback: function(value) {
                return (value / 60).toFixed(0) + 'p';
            }
        }
    },
                
                y: {
                    stacked: true,
                    display: false 
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#9ca3af',
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 11 },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            return data.datasets.map((dataset, i) => {
                                const val = dataset.data[0];
                                const pct = totalSec > 0 ? ((val / totalSec) * 100).toFixed(1) : 0;
                                const isHidden = !chart.isDatasetVisible(i);
                                return {
                                    text: `${dataset.label}: ${pct}%`,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: 'transparent',
                                    fontColor: isHidden ? '#6b7280' : '#9ca3af',
                                    pointStyle: 'circle',
                                    datasetIndex: i,
                                    hidden: isHidden
                                };
                            });
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        title: () => null,
                        label: function(context) {
                            const val = context.raw;
                            const pct = totalSec > 0 ? ((val / totalSec) * 100).toFixed(1) : 0;
                            let timeStr = "";
                            if (val < 60) timeStr = Math.round(val) + "s";
                            else timeStr = (val/60).toFixed(1) + "p";
                            
                            const rawLabel = context.dataset.label;

                            // IF Level 0 (Cơ bản) OR Level 5 (Thất niệm) -> Show label as is
                            if (rawLabel.includes('Chánh niệm') || rawLabel.includes('Thất niệm')) {
                                return `${rawLabel}: ${pct}% (${timeStr})`;
                            } 
                            
                            // ELSE (Levels 1-4) -> Add prefix and lowercase
                            return `Mức chú tâm: ${rawLabel} - ${pct}% (${timeStr})`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: titleText,
                    color: titleColor,
                    font: { size: 13, style: 'italic', weight: titleWeight },
                    padding: { bottom: 10 }
                }
            }
        }
    });
}
renderIntensityChart(ctx, log) {
    const startTime = log.timestamp;
    const durationSeconds = (log.minutes * 60) || Math.ceil((Date.now() - startTime) / 1000);
    
    const dataPoints = [];
    const labels = [];
    const totalPoints = 30; 
    const step = durationSeconds / totalPoints; 

    for (let s = 0; s <= durationSeconds; s += step) {
        labels.push(durationSeconds < 120 ? Math.round(s) + 's' : (s / 60).toFixed(0));
        const windowSizeMs = 60000; 
        const windowStart = (s * 1000) - (windowSizeMs / 2);
        const windowEnd = (s * 1000) + (windowSizeMs / 2);

        const intensity = log.touches.filter(t => {

            const touchTime = this.getTouchTimestamp(t, log.timestamp) - startTime;
            return touchTime >= windowStart && touchTime <= windowEnd;
        }).length;
        dataPoints.push(intensity);
    }

    const chartHeight = ctx.canvas.clientHeight || 300; 
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, 'rgba(167, 139, 250, 0.6)'); 
    gradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.3)'); 
    gradient.addColorStop(1, 'rgba(167, 139, 250, 0.05)');   

    this.charts.session = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Chánh niệm',
                data: dataPoints,
                borderColor: '#a78bfa', 
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointBackgroundColor: '#c7b6fc',
                pointBorderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { title: { display: true, text: 'Thời điểm (phút)', font: { size: 11 }, color: '#9ca3af' }, grid: { display: true }, ticks: { maxTicksLimit: 20, color: '#9ca3af' } },
                y: { beginAtZero: true, title: { display: true, font: { size: 11 }, text: 'Số lần Chánh niệm', color: '#9ca3af', padding: 0.1 }, grid: { color: 'rgba(55, 65, 81, 0.5)' }, ticks: { color: '#9ca3af', precision: 0, } }
            },
            plugins: {
                tooltip: {
                    mode: 'index', intersect: false, displayColors: false,
                    callbacks: { title: () => '', 
            // This is your custom text
            label: (c) => c.raw >= 1 ? "🌱 Chánh niệm (" + c.raw + ")" : "☁️ Thất niệm" }
                },
                legend: { display: false }
            }
        }
    });
}

renderIntervalChart(ctx, log) {

    const timestamps = log.touches
        .map(t => this.getTouchTimestamp(t, log.timestamp))
        .sort((a, b) => a - b);
        
    const startTime = log.timestamp;

    const dataPoints = [];
    const labels = [];
    let previousTime = startTime;

    timestamps.forEach(t => {
        const gapSeconds = (t - previousTime) / 1000;
        const timeFromStartMins = ((t - startTime) / 1000 / 60).toFixed(0);
        
        dataPoints.push(gapSeconds.toFixed(1));
        labels.push(timeFromStartMins);
        previousTime = t;
    });

    const endTime = startTime + (log.minutes * 60 * 1000);
    if (endTime > previousTime) {
        const finalGap = (endTime - previousTime) / 1000;
        dataPoints.push(finalGap.toFixed(1));
        labels.push(log.minutes.toFixed(1));
    }

    const chartHeight = ctx.canvas.clientHeight || 300;
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, 'rgba(248, 113, 113, 0.6)'); 
    gradient.addColorStop(0.5, 'rgba(248, 113, 113, 0.3)'); 
    gradient.addColorStop(1, 'rgba(248, 113, 113, 0.05)'); 

    this.charts.session = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels, 
            datasets: [{
                label: 'Khoảng cách thất niệm',
                data: dataPoints,
                borderColor: '#f87171', 
                backgroundColor: gradient,
                borderWidth: 2,
                fill: true,
                tension: 0.2, 
                pointRadius: 0,
                pointBackgroundColor: '#f87171',
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { 
                    title: { display: true, text: 'Thời điểm (phút)', font: { size: 11 }, color: '#9ca3af' }, 
                    grid: { display: true }, 
                    ticks: { color: '#9ca3af', maxTicksLimit: 15 } 
                },
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Độ trễ', font: { size: 11 }, color: '#9ca3af', padding: 0.1 }, 
                    ticks: { color: '#9ca3af' } 
                }
            },
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (items) => `Phút thứ ${items[0].label}`,
                        label: (c) => `Độ trễ: ${c.raw} giây`
                    }
                },
                legend: { display: false }
            }
        }
    });
}

exportSessionData(timestamp) {
    const log = this.data.logs.find(l => l.timestamp == timestamp);
    if (!log) {
        this.showToast('Không tìm thấy dữ liệu!');
        return;
    }

    const dataStr = JSON.stringify(log);

    if (navigator.clipboard) {
        navigator.clipboard.writeText(dataStr).then(() => {
            this.showToast('Đã sao chép dữ liệu JSON!');
        }).catch((err) => {
            console.error('Async: Could not copy text: ', err);
            this.fallbackCopyText(dataStr);
        });
    } else {
        this.fallbackCopyText(dataStr);
    }
}

fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if(successful) this.showToast('Đã sao chép dữ liệu JSON!');
        else this.showToast('Không thể sao chép');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        this.showToast('Lỗi sao chép');
    }
    
    document.body.removeChild(textArea);
}
            openChoiceModal() { document.getElementById('choice-modal').style.display = 'flex'; }
            closeChoiceModal() { document.getElementById('choice-modal').style.display = 'none'; }

            openModal(goalId = null, type = 'standard') { 
                this.closeChoiceModal(); 
                const modal = document.getElementById('goal-modal');
                const title = document.getElementById('modal-title');
                const btn = document.getElementById('btn-save-goal');
                const catSelect = document.getElementById('g-cat');
                catSelect.innerHTML = '';
                const cats = type === 'meditation' ? ['Thiền Toạ', 'Thiền Hành', 'Thiền Quán', 'Tu Tập'] : ['Công việc', 'Học tập', 'Sức khỏe', 'Sáng tạo', 'Tạo phước', 'Khác'];
                cats.forEach(c => { const opt = document.createElement('option'); opt.value = c; opt.innerText = c; catSelect.appendChild(opt); });

                const dailyHint = document.getElementById('g-daily-hint');
                const lifeHint = document.getElementById('g-life-hint');
                if (type === 'meditation') { dailyHint.innerText = "chánh niệm"; lifeHint.innerText = "chánh niệm"; } 
                else { dailyHint.innerText = "phút"; lifeHint.innerText = "phút"; }
                document.getElementById('g-type').value = type;

                if (goalId) {
                    const goal = this.data.goals.find(g => g.id === goalId);
                    if (goal) {
                        document.getElementById('g-id').value = goal.id;
                        document.getElementById('g-name').value = goal.name;
                        document.getElementById('g-cat').value = goal.category;
                        document.getElementById('g-color').value = goal.color;
                        document.getElementById('g-lifetime-target').value = goal.lifetimeTargetMinutes;
                        document.getElementById('g-daily-target').value = goal.dailyTargetMinutes;
                        document.getElementById('g-type').value = goal.type || 'standard';
                        title.innerText = 'Sửa mục tiêu'; btn.innerText = 'Lưu';
                    }
                } else {
                    document.getElementById('g-id').value = '';
                    document.getElementById('g-name').value = '';
                    document.getElementById('g-color').value = type === 'meditation' ? '#a78bfa' : '#818cf8';
                    document.getElementById('g-lifetime-target').value = 1000;
                    document.getElementById('g-daily-target').value = 100;
                    title.innerText = type === 'meditation' ? 'Mục tiêu Mới' : 'Mục tiêu Mới'; btn.innerText = 'Tạo';
                }
                modal.style.display = 'flex'; 
            }
            closeModal() { document.getElementById('goal-modal').style.display = 'none'; }
            
            renderCalendar() {
                const grid = document.getElementById('calendar-grid');
                grid.innerHTML = '';
                const y = this.currentMonth.getFullYear(); const m = this.currentMonth.getMonth();
                document.getElementById('cal-month-year').innerText = new Date(y, m).toLocaleString('vi-VN', { month: 'long', year: 'numeric' });

                const headerDiv = document.createElement('div');
                headerDiv.className = 'calendar-header';
                ['T2','T3','T4','T5','T6','T7','CN'].forEach(d => {
                    const h = document.createElement('div'); h.className = 'cal-head-day'; h.innerText = d;
                    grid.appendChild(h);
                });

                const firstDayRaw = new Date(y, m, 1).getDay();

                const blankSlots = firstDayRaw === 0 ? 6 : firstDayRaw - 1;

                const daysInMonth = new Date(y, m + 1, 0).getDate();
                
                for(let i=0; i<blankSlots; i++) { grid.appendChild(document.createElement('div')); }
                for(let i=1; i<=daysInMonth; i++) {
                    const dStr = `${y}-${String(m+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
                    const dayEl = document.createElement('div');
                    dayEl.className = 'calendar-day'; dayEl.innerText = i;
                    const totalMins = this.data.logs.filter(l => l.date === dStr).reduce((sum, l) => sum + l.minutes, 0);
if(totalMins > 0) {
    dayEl.classList.add('has-data');

    if (totalMins >= 240) dayEl.classList.add('level-8');      
    else if (totalMins >= 180) dayEl.classList.add('level-7'); 
    else if (totalMins >= 150) dayEl.classList.add('level-6'); 
    else if (totalMins >= 120) dayEl.classList.add('level-5'); 
    else if (totalMins >= 90) dayEl.classList.add('level-4');  
    else if (totalMins >= 60) dayEl.classList.add('level-3');  
    else if (totalMins >= 30) dayEl.classList.add('level-2');  
    else dayEl.classList.add('level-1');                     
}
                    dayEl.onclick = () => this.openDayStats(dStr);
                    grid.appendChild(dayEl);
                }
				const quoteBox = document.getElementById('dhammapada-display');
    if (quoteBox && !quoteBox.hasAttribute('data-loaded')) {
        this.renderRandomQuote();
    }
            }
renderRandomQuote() {
    const display = document.getElementById('dhammapada-display');
    const sourceDisplay = document.getElementById('dhammapada-source'); 
    
    if (!display) return;

    display.style.opacity = '0';
    if(sourceDisplay) sourceDisplay.style.opacity = '0';

    setTimeout(() => {

        const randomIndex = Math.floor(Math.random() * DHAMMAPADA.length);
        const verse = DHAMMAPADA[randomIndex];

        display.innerHTML = verse.t;

        if (sourceDisplay) {

            sourceDisplay.innerText = `Pháp Cú ${randomIndex + 1}`;
            sourceDisplay.style.opacity = '0.7'; 
        }

        display.setAttribute('data-loaded', 'true');

        display.style.opacity = '1';
    }, 200); 
}
            openDayStats(dateStr) {
    this.currentViewDate = dateStr;
    const modal = document.getElementById('day-details-modal');
    document.getElementById('day-modal-title').innerText = new Date(dateStr).toLocaleDateString('vi-VN', {weekday: 'long', day: 'numeric', month: 'numeric'});

    this.switchDayChart('time'); 

    const dayLogs = this.data.logs.filter(l => l.date === dateStr).sort((a,b) => b.timestamp - a.timestamp);
    const listContainer = document.getElementById('day-session-list');
    listContainer.innerHTML = dayLogs.length ? '' : '<p class="empty-state">Không có hoạt động.</p>';
    
    const ul = document.createElement('ul'); 
    ul.style.listStyle = 'none';
    
    dayLogs.forEach(log => {
        const goal = this.data.goals.find(g => g.id === log.goalId);
        const li = document.createElement('li');
        li.style.cssText = 'padding: 8px 0; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; font-size: 13px; align-items:center;';

        let graphBtnHtml = '';
        if (goal && goal.type === 'meditation' && log.touches && log.touches.length > 0) {
            graphBtnHtml = `<button class="btn-icon" style="background:transparent; color:var(--zen); height:24px; width:24px; margin-right:5px; cursor:pointer;" onclick="app.showSessionGraph('${log.timestamp}')"><i class="fas fa-chart-area" style="font-size:12px;"></i></button>`;
        }

        const satiCount = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        const satiInfo = satiCount > 0 ? `<span style="color: var(--zen); font-size: 11px; margin-left: 5px; font-weight:bold;">(${satiCount} Chánh Niệm)</span>` : '';

        const leftSide = `<div>
                           <span style="font-weight:600; color:${goal?goal.color:'#ccc'}">${goal?goal.name:'Đã xóa'}</span>
                           <span style="margin-left:5px;">${log.minutes}p</span>
                           ${satiInfo}
                         </div>`;
        
        const rightSide = `<div style="display:flex; align-items:center;">
                               ${graphBtnHtml}
                               <div style="font-size: 11px; color: var(--text-light); width:35px; text-align:right;">
                                   ${new Date(log.timestamp).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'})}
                               </div>
                           </div>`;

        li.innerHTML = leftSide + rightSide;
        ul.appendChild(li);
    });
    listContainer.appendChild(ul);
    
    modal.style.display = 'flex';
}

renderDayChartOnly(dateStr) {
    const ctx = document.getElementById('dayBreakdownChart').getContext('2d');
    const isMindfulness = this.dayChartMode === 'mindfulness';
    const unitLabel = isMindfulness ? 'Chánh niệm' : 'Phút';

    const dayLogs = this.data.logs.filter(l => l.date === dateStr);
    const goalStats = {};

    dayLogs.forEach(log => {
        if (isMindfulness) {
             const val = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
             if (val === 0) return;
        }

        if(!goalStats[log.goalId]) {
            const goal = this.data.goals.find(g => g.id === log.goalId);
            goalStats[log.goalId] = { 
                name: goal ? goal.name : 'Đã xóa', 
                color: goal ? goal.color : '#ccc', 
                value: 0 
            };
        }
        
        if (isMindfulness) {
            goalStats[log.goalId].value += (log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0));
        } else {
            goalStats[log.goalId].value += log.minutes;
        }
    });

    if(this.charts.dayChart) this.charts.dayChart.destroy();
    
    const dataValues = Object.values(goalStats).map(s => s.value);

    const centerTextPlugin = {
        id: 'centerText',
        afterDatasetsDraw: function(chart) {
            const { ctx, chartArea: { top, bottom, left, right } } = chart;
            
            ctx.save();

            let total = 0;
            const data = chart.data.datasets[0].data;
            if(data.length > 0) {
                data.forEach(val => total += val);
            }

            let mainText = "";
            if (!isMindfulness) {
                // Hour/Minute logic
                if (total < 60) {
                    mainText = total + "p";
                } else {
                    mainText = (total / 60).toFixed(1) + "h";
                }
            } else {
                mainText = total.toLocaleString(); 
            }

            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;

            const chartHeight = bottom - top;
            const fontSizeMain = chartHeight / 10; // Larger for the number
            const fontSizeSub = chartHeight / 20;  // Smaller for the label

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            if (isMindfulness) {
                // --- LINE 1: The Value (White/Bold) ---
                ctx.font = `bold ${fontSizeMain}px sans-serif`;
                ctx.fillStyle = "#FFFFFF"; 
                // Offset slightly upwards
                ctx.fillText(mainText, centerX, centerY - (fontSizeMain * 0.15));

                // --- LINE 2: The Unit Label (Gray/Normal) ---
                ctx.font = `normal ${fontSizeSub}px sans-serif`;
                ctx.fillStyle = "#9ca3af"; 
                // Offset slightly downwards
                ctx.fillText(unitLabel, centerX, centerY + (fontSizeMain * 0.65));
           } else {
            // --- TIME MODE: Only draw the number in the center ---
            ctx.font = `bold ${fontSizeMain}px sans-serif`;
            ctx.fillStyle = "#FFFFFF"; 
            ctx.fillText(mainText, centerX, centerY); 
        }

        ctx.restore();
    }
};

    this.charts.dayChart = new Chart(ctx, {
        type: 'doughnut',
        data: { 
            labels: Object.values(goalStats).map(s => s.name), 
            datasets: [{ 
                data: dataValues, 
                backgroundColor: Object.values(goalStats).map(s => s.color), 
                borderWidth: 1, 
                borderColor: '#1f2937' 
            }] 
        },
        options: { 
        maintainAspectRatio: false, 
        plugins: { 
            legend: { 
                position: 'right', 
                labels: { color: '#9ca3af', font: {size: 11} } 
            },
            title: { 
                display: dataValues.length === 0, 
                text: 'Chưa có dữ liệu', 
                position: 'bottom', 
                color: '#6b7280' 
            },
            tooltip: {
				backgroundColor: '#121821', // Màu Solid (Hex) trùng với var(--surface), chắn hoàn toàn chữ bên dưới
                titleColor: '#f3f4f6',      // Màu chữ sáng (var(--text))
                bodyColor: '#f3f4f6',
                borderColor: '#374151',     // Viền xám (var(--border)) để tooltip nổi bật hơn
                borderWidth: 1,
                padding: 10,
				z: 999,
                callbacks: {
                    label: function(context) {
                        const value = context.raw || 0;
                        
                        // 1. Calculate the total sum of the dataset
                        const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
                        
                        // 2. Calculate percentage (prevent division by zero)
                        const percentage = total > 0 ? ((value / total) * 100).toFixed(0) : 0;

                        // 3. Return the formatted string
                        if (!isMindfulness) {
                            return ` ${value} ${unitLabel} (${percentage}%)`;
                        }
                        return ` ${value} ${unitLabel} (${percentage}%)`;
                    }
                }
            }
        } 
    },
        plugins: [centerTextPlugin]
    });
}
switchDayChart(mode) {
    this.dayChartMode = mode;

    const btnTime = document.getElementById('btn-modal-time');
    const btnMind = document.getElementById('btn-modal-mind');
    
    if (mode === 'time') {
        btnTime.className = 'btn';
        btnMind.className = 'btn btn-secondary';
    } else {
        btnTime.className = 'btn btn-secondary';
        btnMind.className = 'btn';
    }

    if (this.currentViewDate) {
        this.renderDayChartOnly(this.currentViewDate);
    }
}
            closeDayModal() { document.getElementById('day-details-modal').style.display = 'none'; }
setReportMode(mode) {
    this.reportMode = mode;

    const btnTime = document.getElementById('btn-rep-time');
    const btnMind = document.getElementById('btn-rep-mind');
    
    if (mode === 'time') {
        btnTime.className = 'btn'; 
        btnMind.className = 'btn btn-secondary';
    } else {
        btnTime.className = 'btn btn-secondary';
        btnMind.className = 'btn'; 
    }

    this.renderReports();
}

renderReports(resetDates = false) { // 1. Add parameter
    if(!document.getElementById('weeklyChart')) return;
    
    const isMindfulness = this.reportMode === 'mindfulness';
    const unitLabel = isMindfulness ? 'Chánh Niệm' : 'Phút';

    document.getElementById('breakdown-title').innerText = isMindfulness ? 'Biểu đồ Chánh niệm' : 'Biểu đồ Thời gian';

    const rangeSelect = document.getElementById('report-range-select');
    const rangeMode = rangeSelect ? rangeSelect.value : 'all';
    
    const now = new Date();
    const realCurrentDay = now.getDay() || 7; 
    const realThisWeekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - realCurrentDay + 1);
    const realThisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    // 2. Wrap the sync logic in if(resetDates)
    if (resetDates) {
        if (rangeMode === 'last_week') {
            // Sync Weekly Chart to Last Week
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
            // Sync Monthly Chart to the month of that week
            this.currentMonth = new Date(this.currentWeekStart.getFullYear(), this.currentWeekStart.getMonth(), 1);
        } 
        else if (rangeMode === 'last_month') {
            // Sync Monthly Chart to Last Month
            this.currentMonth = new Date(realThisMonthStart);
            this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
            // Sync Weekly Chart to start of that month
            this.currentWeekStart = this.getStartOfWeek(new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1));
        }
        else if (rangeMode === 'this_week' || rangeMode === 'this_month' || rangeMode === 'today') {
            // Reset charts to current
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentMonth = new Date(realThisMonthStart);
        }
    }
    // ---------------------------------------------
    
    // ... (The rest of the function remains exactly the same as provided) ...
    // Define filter range for the Doughnut Chart (Breakdown)
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    let filterStart = 0;
    let filterEnd = Date.now() + 86400000; 

   if (rangeMode === 'today') filterStart = todayStart;
	else if (rangeMode === 'yesterday') {
        filterEnd = todayStart;
        filterStart = todayStart - 86400000; }
     else if (rangeMode === 'this_week') {
        filterStart = realThisWeekStart.getTime();
    } else if (rangeMode === 'last_week') {
        filterEnd = realThisWeekStart.getTime();
        filterStart = realThisWeekStart.getTime() - (7 * 24 * 60 * 60 * 1000);
    } else if (rangeMode === 'this_month') {
        filterStart = realThisMonthStart.getTime();
    } else if (rangeMode === 'last_month') {
        filterEnd = realThisMonthStart.getTime();
        filterStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
    } 

    const weekStartMs = this.currentWeekStart.getTime();
    const weekEndMs = weekStartMs + (7 * 24 * 60 * 60 * 1000);

    const weekEndDisp = new Date(weekEndMs - 1); 
    document.getElementById('weekly-report-title').innerText = `Tuần (${this.currentWeekStart.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})} - ${weekEndDisp.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})})`;

    const mYear = this.currentMonth.getFullYear();
    const mMonth = this.currentMonth.getMonth();
    const monthlyLabels = Array.from({length: new Date(mYear, mMonth + 1, 0).getDate()}, (_, i) => i + 1);
    document.getElementById('monthly-report-title').innerText = `Tháng ${new Date(mYear, mMonth).toLocaleDateString('vi-VN', { month: 'numeric', year: 'numeric' })}`;

    const goalDatasets = {};
    const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    
    this.data.goals.forEach(goal => { 
        if (isMindfulness && goal.type !== 'meditation') return;

        goalDatasets[goal.id] = { 
            name: goal.name, 
            color: goal.color, 
            breakdownTotal: 0, 
            weekly: new Array(7).fill(0),
            monthly: new Array(monthlyLabels.length).fill(0) 
        }; 
    });

    this.data.logs.forEach(log => {
        if(!goalDatasets[log.goalId]) return;

        let value = 0;
        if (isMindfulness) {
            value = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        } else {
            value = log.minutes;
        }

        let logTime = log.timestamp;
        let logDateObj;
        if (!logTime) {
             logDateObj = new Date(log.date); 
             logTime = logDateObj.getTime();
        } else {
             logDateObj = new Date(logTime);
        }

        if (logTime >= filterStart && logTime < filterEnd) {
            goalDatasets[log.goalId].breakdownTotal += value;
        }

        if(logTime >= weekStartMs && logTime < weekEndMs) { 
            let dayIdx = logDateObj.getDay();
            dayIdx = (dayIdx === 0 ? 6 : dayIdx - 1);
            goalDatasets[log.goalId].weekly[dayIdx] += value; 
        }

        if(logDateObj.getFullYear() === mYear && logDateObj.getMonth() === mMonth) {
            goalDatasets[log.goalId].monthly[logDateObj.getDate() - 1] += value;
        }
    });

    const activeGoalsForDoughnut = Object.values(goalDatasets).filter(d => d.breakdownTotal > 0);
    const allGoalsForBars = Object.values(goalDatasets).filter(d => d.weekly.some(v=>v>0) || d.monthly.some(v=>v>0) || d.breakdownTotal > 0);

    const commonOptions = { 
        maintainAspectRatio: false, 
        scales: { 
            x: {stacked: true, grid:{color:'#374151'}, ticks: { color: '#9ca3af', font: { size: 11 }, },
}, 
            y: {
                stacked: true, 
                grid:{color:'#374151'},
                title: { display: false, text: unitLabel }, 
				ticks: { color: '#9ca3af', font: { size: 11 }, },

            } 
        }, 
        plugins: {
            legend: { labels: { color: '#9ca3af', font: {size: 11} } },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + ' ' + unitLabel;
                    }
                }
            }
        } 
    };

    const breakdownOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#9ca3af' } },
            title: {
                display: activeGoalsForDoughnut.length === 0,
                text: 'Chưa có dữ liệu',
                position: 'bottom',
                color: '#6b7280'
            },
            tooltip: {
			backgroundColor: '#121821', // Màu Solid (Hex) trùng với var(--surface), chắn hoàn toàn chữ bên dưới
                titleColor: '#f3f4f6',      // Màu chữ sáng (var(--text))
                bodyColor: '#f3f4f6',
                borderColor: '#374151',     // Viền xám (var(--border)) để tooltip nổi bật hơn
                borderWidth: 1,
                padding: 10,
				z: 999,
            callbacks: {
                label: function(context) {
                    // 1. Get the raw value
                    let value = context.raw; 
                    let label = context.label || '';
                    let formattedValue = "";
                    const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);                           const percentage = total > 0 ? ((value / total) * 100).toFixed(0) : 0;
                    // 2. Apply your Minute -> Hour logic
                    if (unitLabel === 'Phút') {
                        if (value < 60) {
                            formattedValue = value + " phút"; 
                        } else {
                            formattedValue = (value / 60).toFixed(1) + " giờ";
                        }
                    } else {
                        formattedValue = value.toLocaleString() + " " + unitLabel;
                    }

                    return ` ${formattedValue} (${percentage}%)`;
                }
            }
        }
    }
};

    const ctxBreakdown = document.getElementById('goalBreakdownChart').getContext('2d');
    if(this.charts.breakdown) this.charts.breakdown.destroy();

    // 2. CẬP NHẬT PLUGIN VẼ CHỮ Ở GIỮA (Số ở trên, chữ ở dưới)
    const centerTextPlugin = {
    id: 'centerText',
    afterDatasetsDraw: function(chart) {
        const { ctx, chartArea: { top, bottom, left, right } } = chart;
        ctx.save();
        
        let total = 0;
        const data = chart.data.datasets[0].data;
        data.forEach(val => total += val);
        
        let mainText = "";
        let currentUnit = typeof unitLabel !== 'undefined' ? unitLabel : '';
        
        if (currentUnit === 'Phút') {
            // Logic: If less than 60 minutes, show 'p'. Otherwise show 'h'.
            if (total < 60) {
                mainText = total + "p"; // Display minutes
            } else {
                mainText = (total / 60).toFixed(1) + "h"; // Display hours
            }
        } else {
            mainText = total.toLocaleString();
        }
        
        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;
        
        const chartHeight = bottom - top;
        const fontSizeMain = chartHeight / 13;
        const fontSizeSub = chartHeight / 26;
        
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (isMindfulness) {
            // --- MINDFULNESS MODE: Draw 2 lines ---
            ctx.font = `bold ${fontSizeMain}px sans-serif`;
            ctx.fillStyle = "#FFFFFF"; 
            ctx.fillText(mainText, centerX, centerY - (fontSizeMain * 0.15));

            ctx.font = `normal ${fontSizeSub}px sans-serif`;
            ctx.fillStyle = "#9ca3af"; 
            ctx.fillText(currentUnit, centerX, centerY + (fontSizeMain * 0.65));
        } else {
            // --- TIME MODE: Only draw the number in the center ---
            ctx.font = `bold ${fontSizeMain}px sans-serif`;
            ctx.fillStyle = "#FFFFFF"; 
            ctx.fillText(mainText, centerX, centerY); 
        }

        ctx.restore();
    }
};

    this.charts.breakdown = new Chart(ctxBreakdown, { 
        type: 'doughnut', 
        data: { 
            labels: activeGoalsForDoughnut.map(d => d.name), 
            datasets: [{ 
                data: activeGoalsForDoughnut.map(d => d.breakdownTotal), 
                backgroundColor: activeGoalsForDoughnut.map(d => d.color), 
                borderWidth: 1, 
                borderColor: '#1f2937' 
            }] 
        }, 
        options: breakdownOptions, // Sử dụng biến options mới đã khai báo ở trên
        plugins: [centerTextPlugin] 
    });

    const ctxWeek = document.getElementById('weeklyChart').getContext('2d');
if(this.charts.weekly) this.charts.weekly.destroy();

// Create specific options for the Weekly Chart to include the date
const weeklyOptions = {
    ...commonOptions,
    plugins: {
        ...commonOptions.plugins,
        tooltip: {
            ...commonOptions.plugins.tooltip,
            callbacks: {
                ...commonOptions.plugins.tooltip.callbacks,
                title: (context) => {
                    // Get the index of the bar (0 for Mon, 1 for Tue, etc.)
                    const index = context[0].dataIndex;
                    // Calculate the date by adding the index to the week start
                    const date = new Date(this.currentWeekStart);
                    date.setDate(date.getDate() + index);
                    
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    
                    // Return "DayName (dd/mm)"
                    return `${context[0].label} (${day}/${month})`;
                }
            }
        }
    }
};

this.charts.weekly = new Chart(ctxWeek, { 
    type: 'bar', 
    data: { 
        labels: weekDays, 
        datasets: allGoalsForBars.map(g => ({ label: g.name, data: g.weekly, backgroundColor: g.color, stack: '0' })) 
    }, 
    options: weeklyOptions // Use the new weeklyOptions here
});

    const ctxMonth = document.getElementById('monthlyChart').getContext('2d');
    if(this.charts.monthly) this.charts.monthly.destroy();

    const monthlyOptions = {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                    ...commonOptions.plugins.tooltip.callbacks,
                    title: function(context) {
                        const d = context[0].label;
                        return `${String(d).padStart(2, '0')}/${String(mMonth + 1).padStart(2, '0')}`;
                    }
                }
            }
        }
    };

    this.charts.monthly = new Chart(ctxMonth, { 
        type: 'bar', 
        data: { 
            labels: monthlyLabels, 
            datasets: allGoalsForBars.map(g => ({ label: g.name, data: g.monthly, backgroundColor: g.color, stack: '0' })) 
        }, 
        options: monthlyOptions 
    });
	
const ctxDensity = document.getElementById('reportDensityChart');
if (ctxDensity) {
    // 1. Update the Title
    const densityTitle = document.getElementById('density-month-title');
    if (densityTitle) {
         densityTitle.innerText = `Tháng ${new Date(mYear, mMonth).toLocaleDateString('vi-VN', { month: 'numeric', year: 'numeric' })}`;
    }

    // 2. Prepare Data (Calculate this BEFORE checking chart existence)
    const daysInMonth = monthlyLabels.length;
    const dailyMinutes = new Array(daysInMonth).fill(0);
    const dailyCounts = new Array(daysInMonth).fill(0);

    this.data.logs.forEach(log => {
        const goal = this.data.goals.find(g => g.id === log.goalId);
        if (!goal || goal.type !== 'meditation') return;

        const logDateObj = new Date(log.timestamp || log.date);
        if (logDateObj.getFullYear() !== mYear || logDateObj.getMonth() !== mMonth) return;

        const dayIdx = logDateObj.getDate() - 1;
        
        const minutes = log.minutes;
        const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);

        if (minutes > 0) {
            dailyMinutes[dayIdx] += minutes;
            dailyCounts[dayIdx] += count;
        }
    });

    const densityData = dailyMinutes.map((mins, i) => {
        return mins > 0 ? (dailyCounts[i] / mins).toFixed(1) : 0;
    });

    // 3. Logic: Update if exists, Create if new
    if (this.charts.reportDensity) {
        // SMOOTH UPDATE: Just swap data and call update()
        this.charts.reportDensity.data.labels = monthlyLabels;
        this.charts.reportDensity.data.datasets[0].data = densityData;
        this.charts.reportDensity.update();
    } else {
        // INITIAL CREATE
        const ctxD = ctxDensity.getContext('2d');
        this.charts.reportDensity = new Chart(ctxD, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [{
                    label: 'Chánh niệm/phút',
                    data: densityData,
                    borderColor: '#818cf8',
                    backgroundColor: 'rgba(129, 140, 248, 0.1)',
                    borderWidth: 1.5,
                    fill: true,
                    tension: 0.3,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: true
                },
                elements: {
                    point: {
                        hitRadius: 30,     
                        hoverRadius: 3,
                        radius: 1.3,					
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                const d = context[0].label;
                                return `${String(d).padStart(2, '0')}/${String(mMonth + 1).padStart(2, '0')}`;
                            },
                            label: function(context) {
                                return ` ${context.raw} Chánh niệm/phút`;
                            },
                            labelColor: function(context) {
                                return {
                                    borderColor: context.dataset.borderColor,
                                    backgroundColor: context.dataset.borderColor,
                                    borderWidth: 0,
                                    borderRadius: 2,
                                };
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#9ca3af', font: { size: 10 } },
                        grid: { color: 'rgba(55, 65, 81, 0.3)' }
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: '#374151' },
                        ticks: { color: '#9ca3af', font: { size: 10 } }
                    }
                }
            }
        });
    }
} }
changeReportWeek(dir) { this.currentWeekStart.setDate(this.currentWeekStart.getDate() + (dir * 7)); this.renderReports(); }
            changeReportMonth(dir) { this.currentMonth.setMonth(this.currentMonth.getMonth() + dir); this.renderReports(); }
            changeMonth(dir) { this.currentMonth.setMonth(this.currentMonth.getMonth() + dir); this.renderCalendar(); }

updateStats() {
    this.recalculateStreak();

    const totalMindfulness = this.data.logs.reduce((sum, log) => {

        return sum + (log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0));
    }, 0);

    this.data.xp = totalMindfulness; 

    document.getElementById('streak-disp').innerText = `${this.data.streak} 🔥`;
    document.getElementById('xp-disp').innerText = `${this.data.xp}`;

   
   
}
            
            recalculateStreak() {
                const activeDates = [...new Set(this.data.logs.filter(l => l.minutes > 0).map(l => l.date))].sort();
                if (activeDates.length === 0) { this.data.streak = 0; return; }
                let streak = 1;
                for (let i = activeDates.length - 2; i >= 0; i--) {
                    const prev = new Date(activeDates[i]);
                    const next = new Date(activeDates[i + 1]);
                    if ((next - prev) < (1000 * 60 * 60 * 48) && (next - prev) > 0) streak++; else break;
                }
                const now = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
                const last = new Date(activeDates[activeDates.length - 1]);
                if ((now - last) / (1000 * 60 * 60 * 24) > 1) this.data.streak = 0; else this.data.streak = streak;
            }

            checkAchievements() {
    let newUnlock = false;
    BADGES.forEach(badge => {
        // Manual badges are triggered by unlockBadge(), so skip them here
        if (badge.id === 'explorer' || badge.id === 'safe_keeper') return;

        if (!this.data.achievements.includes(badge.id) && badge.condition(this.data)) {
            this.data.achievements.push(badge.id);
            this.showToast(`🏆 Mở khóa: ${badge.title}`);
            newUnlock = true;
        }
    });
    if (newUnlock) this.save();
    this.renderAchievementsUI();
}

// 2. Manual trigger for "Explorer" and "Safe Keeper"
unlockBadge(id) {
    if (!this.data.achievements.includes(id)) {
        this.data.achievements.push(id);
        const badge = BADGES.find(b => b.id === id);
        this.showToast(`🏆 Mở khóa: ${badge.title}`);
        this.save();
        this.renderAchievementsUI();
    }
}
renderAchievementsUI() {
    const container = document.getElementById('achievement-list');
    if (!container) return;
    container.innerHTML = '';

    const LOCKED_COLOR = '#4b5563'; 

    const counters = {
        'log': 0,    
        'time': 0,   
        'streak': 0, 
        'sit': 0,    
        'focus': 0,
		'sfocus': 0,
        'mind': 0,   
        'mindf': 0,  
        'qual': 0,   
        'other': 0   
    };

    const getGenericInfo = (id) => {
        let prefix = id.split('_')[0];
        
        if (['daily', 'freq', 'dedicated', 'early', 'night'].includes(prefix)) prefix = 'other'; 
        if (['zero', 'empty'].includes(prefix)) prefix = 'focus'; 
        
        let name = '';
        switch(prefix) {
            case 'log': name = 'Tín Căn'; break;
            case 'time': name = 'Tấn Căn'; break;
            case 'streak': name = 'Tín Lực'; break;
            case 'sit': name = 'Tấn Lực'; break;
            case 'focus': name = 'Định Căn'; break;
			case 'sfocus': name = 'Định Lực'; break;
            case 'mind': name = 'Niệm Căn'; break;
            case 'mindf': name = 'Niệm Lực'; break;
            case 'qual': name = 'Niệm Lực'; break;
            case 'note': name = 'Đa Văn'; break;
            case 'goal': name = 'Trì Giới'; break;
            default: name = 'Trì Giới';
        }

       
        if (!counters[name]) counters[name] = 0;
        counters[name]++;
        
        if (name === 'Trì Giới') {
            return `${name} ${counters[name]}`;
        }
        
        return `${name} bậc ${counters[name]}`;
    };

    BADGES.forEach(badge => {
        const isUnlocked = this.data.achievements.includes(badge.id);
        
        const genericTitle = getGenericInfo(badge.id);
        
        const badgeColor = isUnlocked ? (badge.color || '#cd7f32') : LOCKED_COLOR;
        
        // Dynamic Styles based on the specific badge color
        const bgColor = this.hexToRgba(badgeColor, 0.1);
        const borderColor = badgeColor;
        const iconColor = badgeColor;
        const textColor = isUnlocked ? '#ffffff' : '#9ca3af';

        const div = document.createElement('div');
        div.style.cssText = `
            display: flex; 
            align-items: center; 
            gap: 15px; 
            padding: 12px;
            background: ${bgColor}; 
            border: 1px solid ${borderColor};
            border-radius: 8px; 
            margin-bottom: 10px;
            transition: all 0.4s ease;
        `;

        div.innerHTML = `
            <div style="
                min-width: 42px; height: 42px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                border: 2px solid ${iconColor}; 
                color: ${iconColor}; 
                font-size: 18px;
                background: rgba(0,0,0,0.2);
                ${isUnlocked ? `box-shadow: 0 0 10px ${this.hexToRgba(badgeColor, 0.4)};` : ''}
            ">
                <i class="${badge.icon.includes('fab') ? badge.icon : 'fas ' + badge.icon}"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: ${textColor}; font-size: 14px; display: flex; justify-content: space-between;">
                    ${genericTitle} 
                    <span style="font-size: 10px; color: ${iconColor}; text-transform: uppercase; letter-spacing: 1px; font-weight:bold;">
                        ${isUnlocked ? 'Đã đạt' : ''}
                    </span>
                </div>
                <div style="font-size: 11px; color: #9ca3af; margin-top: 2px;">
                    ${badge.desc}
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

openBadgePicker() {
    this.lastSelectedBadgeTitle = null;
    if (document.getElementById('badge-picker-modal')) {
        document.getElementById('badge-picker-modal').remove();
    }

    const modalHtml = `
        <div id="badge-picker-modal" class="modal" style="display:flex; z-index: 3000; align-items: center; justify-content: center;">
            <div class="modal-content" style="max-width: 550px; width: 95%; max-height: 85vh; display: flex; flex-direction: column; padding: 0; border-radius: 16px;">
                
                <div style="padding: 15px 20px; border-bottom: 1px solid var(--border); position: relative; display: flex; justify-content: center; align-items: center; background: var(--surface); border-radius: 16px 16px 0 0;">
                    <h3 style="margin: 0; font-size: 18px;"><i class="fas fa-award"></i> Chọn Pāramī</h3>
                    <button class="btn-icon" onclick="app.closeBadgePicker()" style="position: absolute; right: 20px; color: var(--text-light); background: transparent;"><i class="fas fa-times"></i></button>
                </div>

                <div style="padding: 20px; overflow-y: auto; background: var(--bg);">
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 12px;">
                        ${BADGES.map(badge => {
                            // --- MODIFICATION: ALWAYS UNLOCKED FOR PICKER ---
                            const isUnlocked = true; // Force unlock in picker
                            const isActive = this.data.activeBadge === badge.id;
                            
                            // Color Logic
                            const badgeColor = badge.color || '#cd7f32'; // Use actual color
                            let opacity = '1'; // Full opacity
                            let cursor = 'pointer'; // Clickable
                            
                            // Active State
                            let bg = isActive ? this.hexToRgba(badgeColor, 0.15) : 'rgba(255, 255, 255, 0.03)';
                            let border = isActive ? `2px solid ${badgeColor}` : '1px solid var(--border)';
                            let transformHover = 'translateY(-2px)';
                            
                            const checkMarkDisplay = isActive ? 'block' : 'none';

                            return `
                                <div id="badge-option-${badge.id}"
                                     class="badge-option-item"
                                     onclick="app.selectBadge('${badge.id}')" 
                                     style="
                                        position: relative;
                                        display: flex; flex-direction: column; align-items: center; justify-content: center;
                                        padding: 15px 5px;
                                        background: ${bg};
                                        border: ${border};
                                        border-radius: 12px;
                                        opacity: ${opacity};
                                        cursor: ${cursor};
                                        transition: all 0.2s ease;
                                        text-align: center;
                                        min-height: 90px;
                                     "
                                     onmouseover="this.style.transform='${transformHover}'"
                                     onmouseout="this.style.transform='translateY(0)'"
                                     title="${badge.title} - ${badge.desc}"
                                >
                                    <div id="check-${badge.id}" style="display: ${checkMarkDisplay}; position:absolute; top:5px; right:5px; color:${badgeColor}; font-size:12px;">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div style="font-size: 24px; color: ${badgeColor}; margin-bottom: 8px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                                    <i class="${badge.icon.includes('fab') ? badge.icon : 'fas ' + badge.icon}"></i>
                                    </div>
                                    <div style="font-size: 11px; font-weight: 600; color: var(--text); line-height: 1.3;">${badge.title}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div style="padding: 15px 20px; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; background: var(--surface); border-radius: 0 0 16px 16px;">
                    <button class="btn" onclick="app.closeBadgePicker()">Lưu & Áp dụng</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}
selectBadge(badgeId) {
    // 1. Update Data & Save
    this.data.activeBadge = badgeId;
    this.save();
    
    // 2. Update the main display header immediately
    this.loadActiveBadge(); 
    
    // 3. Update Modal Visuals (Highlighting the selected item)
    const badge = BADGES.find(b => b.id === badgeId);
    this.lastSelectedBadgeTitle = badge.title;

    // Reset all options in the modal
    const allOptions = document.querySelectorAll('.badge-option-item');
    allOptions.forEach(el => {
        el.style.borderColor = 'var(--border)';
        el.style.borderWidth = '1px';
        el.style.background = 'rgba(255, 255, 255, 0.03)';
        const check = el.querySelector('div[id^="check-"]');
        if(check) check.style.display = 'none';
    });

    // Highlight the clicked option
    const activeEl = document.getElementById(`badge-option-${badgeId}`);
    if (activeEl) {
        const color = badge.color || '#cd7f32';
        activeEl.style.borderColor = color;
        activeEl.style.borderWidth = '2px';
        activeEl.style.background = this.hexToRgba(color, 0.15);
        const activeCheck = document.getElementById(`check-${badgeId}`);
        if(activeCheck) activeCheck.style.display = 'block';
    }
}

closeBadgePicker() {
    const modal = document.getElementById('badge-picker-modal');
    if (modal) {
        modal.remove();
        
        // Only show toast if a badge was actually picked during this session
        if (this.lastSelectedBadgeTitle) {
            this.showToast(`Đã chọn Pāramī: ${this.lastSelectedBadgeTitle}`);
            this.lastSelectedBadgeTitle = null; // Reset
        }
    }
}

loadActiveBadge() {
    const container = document.getElementById('current-active-badge');
    if (!container) return;

    if (this.data.activeBadge) {
        const badge = BADGES.find(b => b.id === this.data.activeBadge);
        if (badge) {
            const color = badge.color || '#cd7f32'; 

            container.innerHTML = `<i class="${badge.icon.includes('fab') ? badge.icon : 'fas ' + badge.icon}"></i>`;
            
            
            container.style.color = '#ffffff'; 
            
            container.style.textShadow = `0 0 5px ${color}`;

            container.style.borderColor = color;

            container.style.backgroundColor = this.hexToRgba(color, 0.2); 
            
            container.style.boxShadow = `0 0 15px ${this.hexToRgba(color, 0.6)}`;
            
          
            container.classList.remove('silver');
        }
    } else {
        container.innerHTML = `<i class="fas fa-award"></i>`;
        
        container.style.color = '#ffffff';
        container.style.textShadow = 'none'; // Reset text shadow
        container.style.borderColor = '#c0c0c0'; // Silver border
        container.style.backgroundColor = 'rgba(192, 192, 192, 0.2)';
        container.style.boxShadow = '0 0 15px rgba(192, 192, 192, 0.4)';
    }
}

   formatTime(seconds) {
                const h = Math.floor(seconds / 3600);
                const m = Math.floor((seconds % 3600) / 60);
                const s = seconds % 60;
                return `${h > 0 ? h+':' : ''}${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
            }
            toIsoDate(date) {
    const y = date.getFullYear();

    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
            toDateTimeInput(timestamp) {
    const date = new Date(timestamp);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d}T${hh}:${mm}`;
}
            toDisplayDate(timestamp) { const d = new Date(timestamp); return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`; }
            showToast(msg, isAchievement = false) {
                const t = document.getElementById('toast');
                document.getElementById('toast-msg').innerText = msg;
                t.classList.remove('achievement'); if (isAchievement) t.classList.add('achievement');
                t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000);
            }
            
            switchView(viewName) {
                document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
                document.getElementById(`view-${viewName}`).classList.add('active');
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                event.currentTarget.classList.add('active');
                
                const titles = {
                    'dashboard': 'Nhật ký',
                    'calendar': 'Lịch trình',
                    'reports': 'Tổng hợp',
					'analytics': 'Phân tích',
					'pro': 'Chuyên sâu',
					'achievements': 'Pāramī'
                };
                
                document.getElementById('page-title').innerText = titles[viewName] || 'Nhật ký';
                if (viewName === 'reports') { this.renderReports(); }
                if (viewName === 'calendar') this.renderCalendar();
				if (viewName === 'analytics') this.renderAnalytics();
			    if (viewName === 'pro') this.renderProAnalytics();
            }

    exportData() {
        const dataStr = JSON.stringify(this.data);
        const modal = document.getElementById('backup-modal');
        modal.style.display = 'flex';
    }

    closeBackupModal() {
        document.getElementById('backup-modal').style.display = 'none';
    }

  shareBackup() {
    const dataStr = JSON.stringify(this.data);

    const now = new Date();
    const datePart = now.toISOString().split('T')[0];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const fileName = `backup_${datePart}-${hours}h${minutes}.txt`;

    if (typeof Website2APK !== 'undefined' && Website2APK.shareIntent) {
        Website2APK.shareIntent(dataStr, "Backup", "");
        return;
    }

    if (navigator.share) {
        const file = new File([dataStr], fileName, { type: "application/json" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
                files: [file],
                title: 'Sao lưu Nhật Ký Hành Giả',
                text: 'File dữ liệu sao lưu.'
            })
            .then(() => this.showToast('Đã chia sẻ thành công!'))
            .catch((error) => {

                if (error.name !== 'AbortError') this.copyToClipboard(dataStr);
            });
            return;
        } 
    } 

    this.copyToClipboard(dataStr);
}

copyToClipboard(text) {

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Đã chép dữ liệu vào bộ nhớ tạm!');
        }).catch(err => {
            this.fallbackCopyText(text);
        });
    } else {
        this.fallbackCopyText(text);
    }
}

fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; 
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            this.showToast('Đã chép dữ liệu sao lưu!');
        } else {
            this.showToast('Không thể chép, hãy dùng nút Sao lưu tải file.');
        }
    } catch (err) {
        this.showToast('Lỗi khi sao chép dữ liệu.');
    }
    document.body.removeChild(textArea);
}

   downloadFile() {
    const dataStr = JSON.stringify(this.data);

    const now = new Date();
    const datePart = now.toISOString().split('T')[0];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const fileName = `backup_${datePart}-${hours}h${minutes}.txt`;

    if (typeof Website2APK !== 'undefined') {

        if (Website2APK.saveBackup) {

            const base64 = btoa(unescape(encodeURIComponent(dataStr)));

            Website2APK.saveBackup(base64, fileName);
            this.showToast('Đang lưu file vào thư mục Download...');
        } 
    } else {

        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
        this.showToast('Đã tải xuống file!');
    }
}

    handleFileUpload(inputElement) {
        const file = inputElement.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {

            this.processRestoreData(e.target.result);
        };
        reader.readAsText(file);

        inputElement.value = '';
    }

    async processRestoreData(jsonString) {
        try {
            const json = JSON.parse(jsonString);

            if (!json.goals || !Array.isArray(json.goals) || !json.logs) {
                throw new Error("Cấu trúc file không hợp lệ (Thiếu goals/logs).");
            }

            if (confirm(`Tìm thấy ${json.goals.length} mục tiêu và ${json.logs.length} nhật ký.\nBạn có chắc muốn ghi đè dữ liệu hiện tại không?`)) {
                // Save to IndexedDB
                await dbHelper.saveAll(json);
                alert("Khôi phục thành công. Ứng dụng sẽ tải lại.");
                location.reload(); 
            }
        } catch (err) {
            alert("Lỗi khôi phục: " + err.message);
        }
    }


            resetApp() {
    if (confirm('Xóa TẤT CẢ dữ liệu? Hành động này không thể hoàn tác.')) {
        // 1. QUAN TRỌNG: Đóng kết nối DB đang mở
        // Nếu không đóng, trình duyệt sẽ chặn (block) lệnh xóa và chờ mãi mãi.
        if (dbHelper.db) {
            dbHelper.db.close();
        }

        // 2. Xóa dữ liệu LocalStorage (Legacy & Config)
        localStorage.removeItem('chronoData');
        localStorage.removeItem('chronoData_backup');
        localStorage.removeItem('anaGoalFilter');
        localStorage.removeItem('intro_seen'); // Tùy chọn: Xóa cái này để hiện lại intro

        // 3. Gửi yêu cầu xóa IndexedDB
        const req = indexedDB.deleteDatabase(DB_CONFIG.name);

        // Xử lý khi thành công
        req.onsuccess = () => {
            console.log("DB Deleted successfully");
            location.reload();
        };

        // Xử lý khi bị lỗi
        req.onerror = () => {
            console.error("Could not delete DB");
            location.reload(); // Vẫn reload để đảm bảo UI được làm mới
        };

        // Xử lý khi bị chặn (Blocked) - Đây là trường hợp dự phòng
        req.onblocked = () => {
            console.warn("DB Delete blocked - forcing reload");
            location.reload();
        };
    }
}
			
deleteSession() {
    const logId = document.getElementById('s-log-id').value;
    const goalId = document.getElementById('s-goal-id').value;

    if (!logId) return; 

    if (confirm('Bạn có chắc chắn muốn xóa vĩnh viễn phiên này khỏi lịch sử?')) {

        const logIndex = this.data.logs.findIndex(l => l.timestamp == logId);
        if (logIndex === -1) return;
        
        const log = this.data.logs[logIndex];
        const goal = this.data.goals.find(g => g.id === goalId);

        if (goal) {
            goal.totalMinutes -= log.minutes;
            if (goal.totalMinutes < 0) goal.totalMinutes = 0;

            if (goal.type === 'meditation') {
                const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
                goal.totalMindfulness -= count;
                if (goal.totalMindfulness < 0) goal.totalMindfulness = 0;
            }
        }

        this.data.logs.splice(logIndex, 1);

      dbHelper.deleteLog(parseInt(logId)).then(() => {
            this.showToast('Đã xóa phiên!');
        }).catch(err => console.error(err));
        
        this.save();
        this.renderGoals();      
        this.renderCalendar();   
        this.renderReports();    
        this.updateStats();      
        
        this.closeSessionModal();
        this.showToast('Đã xóa phiên!');
    }
}			
openSessionModal(goalId, minutes = 0, logId = null, startTime = Date.now()) {
    document.getElementById('session-modal').style.display = 'flex';
    document.getElementById('s-goal-id').value = goalId;
    document.getElementById('s-log-id').value = logId || '';
    document.getElementById('s-date').value = this.toDateTimeInput(startTime);
    document.getElementById('s-minutes').value = minutes;

    const deleteBtn = document.getElementById('btn-delete-session');
    if (logId) deleteBtn.style.display = 'block'; 
    else deleteBtn.style.display = 'none';  
    
    const goal = this.data.goals.find(g => g.id === goalId);
    const mindGroup = document.getElementById('s-mindfulness-group');
    const mindInput = document.getElementById('s-mindfulness');
    const thresholdInput = document.getElementById('s-threshold');
    
    if (goal && goal.type === 'meditation') {
        mindGroup.style.display = 'block';
        let currentCount = 0;
        let currentThreshold = 6; 

        if (logId) {
            const log = this.data.logs.find(l => l.timestamp == logId);
            if (log) {
                currentCount = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);

                if(log.threshold) currentThreshold = log.threshold;
            }
        }
        mindInput.value = currentCount;
        thresholdInput.value = currentThreshold;
    } else {
        mindGroup.style.display = 'none';
        mindInput.value = 0;
    }

    let notes = ''; 
    if(logId) { 
        const log = this.data.logs.find(l => l.timestamp == logId); 
        if(log && log.notes) notes = log.notes; 
    }
    document.getElementById('s-notes').value = notes;
	this.renderQuickTags('session-tags', 's-notes');
    document.getElementById('session-title').innerText = logId ? 'Chỉnh sửa' : 'Nhập thủ công';
}
            closeSessionModal() { document.getElementById('session-modal').style.display = 'none'; }
logSessionConfirm(e) {
        e.preventDefault();
        const goalId = document.getElementById('s-goal-id').value;
        const logId = document.getElementById('s-log-id').value;
        const dateTimeStr = document.getElementById('s-date').value;
        const minutes = parseInt(document.getElementById('s-minutes').value);
        
        const mindfulness = parseInt(document.getElementById('s-mindfulness').value) || 0;
        const threshold = parseInt(document.getElementById('s-threshold').value) || 6; 
        let notes = document.getElementById('s-notes').value;
        
        if (minutes <= 0) return;
        
        const goal = this.data.goals.find(g => g.id === goalId);
        
        if (goal && goal.type === 'meditation') {
            let cleanNotes = notes.replace(/^Chánh niệm: \d+(\.\s*)?/, '').trim();
            if (mindfulness > 0) {
                notes = `Chánh niệm: ${mindfulness}. ${cleanNotes}`;
            } else {
                notes = cleanNotes;
            }
    
            goal.lastThreshold = threshold;
        }
    
        const dateObj = new Date(dateTimeStr);
        const timestamp = dateObj.getTime();
        const dateKey = dateTimeStr.split('T')[0]; 
        
        if (logId) {
            const log = this.data.logs.find(l => l.timestamp == logId);
            if (log) {
                const oldMinutes = log.minutes;
                const oldMindfulness = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
                
                // --- FIX: Check if timestamp changed ---
                // If the time changed, the DB Key changes. We must delete the old Key manually
                // because save() will only insert the new Key, leaving the old one as a duplicate.
                if (Number(logId) !== timestamp) {
                    dbHelper.deleteLog(logId);
                }
                // ---------------------------------------

                log.minutes = minutes; 
                log.date = dateKey; 
                log.timestamp = timestamp; 
                log.notes = notes; 
                log.count = mindfulness;
                log.threshold = threshold; 
                
                if (goal) {
                    goal.totalMinutes += (minutes - oldMinutes);
                    if (goal.type === 'meditation') {
                        if (!goal.totalMindfulness) goal.totalMindfulness = 0;
                        goal.totalMindfulness = goal.totalMindfulness - oldMindfulness + mindfulness;
                    }
                }
            }
        } else {
            this.data.logs.push({ 
                goalId, 
                date: dateKey, 
                timestamp, 
                minutes, 
                notes, 
                count: mindfulness, 
                touches: [],
                threshold: threshold 
            });
            
            if (goal) {
                goal.totalMinutes += minutes;
                if (goal.type === 'meditation') {
                    if (!goal.totalMindfulness) goal.totalMindfulness = 0;
                    goal.totalMindfulness += mindfulness;
                }
            }
        }
        
        this.save(); 
        this.renderGoals(); 
        this.renderCalendar(); 
        this.renderReports(); 
        this.checkAchievements();
        this.closeSessionModal(); 
        this.showToast(logId ? 'Đã cập nhật!' : 'Đã ghi!');
    }
         deleteGoal(id) {
    if(confirm('Xóa mục tiêu này và TOÀN BỘ lịch sử liên quan? Hành động này không thể hoàn tác.')) {
        
        this.data.goals = this.data.goals.filter(g => g.id !== id);
        this.data.logs = this.data.logs.filter(log => log.goalId !== id);
        
        this.updateStats(); 

        dbHelper.deleteGoalData(id)
            .then(() => {
                
                dbHelper.saveAll({
                    goals: this.data.goals,
                    logs: [], 
                    xp: this.data.xp,
                    streak: this.data.streak,
                    achievements: this.data.achievements,
                    medSettings: this.data.medSettings
                }).catch(e => console.log("Meta save update")); 

                // 3. Update UI
                this.renderGoals(); 
                this.renderReports(); 
                this.renderCalendar(); 
                
                this.showToast('Đã xóa mục tiêu và lịch sử!');
            })
            .catch(err => {
                console.error(err);
                this.showToast('Lỗi khi xóa dữ liệu trong DB!');
            });
    }
}
            renderDate() {
                 document.getElementById('current-date').innerText = new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            }
        }

        const app = new GoalTracker();